import cloudinary from "cloudinary";
import productModel from "../models/productModel.js";
export const addProduct=async (req , res)=>{

try {
    const { name, price, description, category, subCategory, sizes, bestSeller}=req.body;
    const image1= req.files.image1 &&  req.files.image1[0]
    const image2= req.files.image2 && req.files.image2[0]
    const image3= req.files.image3 && req.files.image3[0]
    const image4= req.files.image4 && req.files.image4[0]

      const images= [image1,image2, image3, image4].filter((item)=>item !== undefined)
      const imageURL = await Promise.all(
        images.map(async(item)=>{
            let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
         return result.secure_url;
        })
      )
        

      let parsedSizes = [];

if (sizes) {
  parsedSizes = typeof sizes === "string" ? JSON.parse(sizes) : sizes;
}

  const productData ={
    name, 
    description,
    price: Number(price),
   bestSeller,
   category,
    subCategory,
   sizes: parsedSizes,
    image:imageURL ,
    date: Date.now()
  }
const product = new productModel(productData)
  await product.save();

    // console.log(name, price , description, category, subCategory, sizes, bestSeller)
    // console.log(imageURL)
    res.json({success:true, message: "Product Added"})

} catch (error) {

    console.log(error)
     res.json({success:false, message:error.message})

}


}


//function for list Product

export const listProduct= async(req, res)=>{
    
    try {
  const products = await productModel.find({});


    res.json({success: true, products})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
  



}
    

//function for remove Product

export const removeProduct= async(req, res)=>{
      try {
  await productModel.findByIdAndDelete(req.body.id);


    res.json({success: true, message: "Product Removed"})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
  


}

//function for single Product info
export const singleProduct= async(req, res)=>{
  try {

    const {productId} = req.body;
    const product = await productModel.findById(productId)
    res.json({success:true, product})

  } catch (error) {
     console.log(error)
        res.json({success:false, message:error.message})
  }
    
}


