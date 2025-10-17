import userModel from "../models/userModel.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = userData.cartData || {}; // ✅ ensure it exists

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// UPDATE CART
export const updateToCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = userData.cartData || {}; // ✅ safe

    if (!cartData[itemId]) cartData[itemId] = {}; // ✅ if missing
    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// GET CART
export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = userData.cartData || {}; // ✅ safe
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};







// import userModel from "../models/userModel.js"

// //add products to user Cart
// export const addToCart= async ( req, res) =>{

// try {
//     const { userId , itemId, size} = req.body;


//     const userData = await userModel.findById(userId)
//     let cartData= await userData.cartData

// if(cartData[itemId]){
//    if (cartData[itemId][size]){
//     cartData[itemId][size] +=1;
//    }else{
//     cartData[itemId][size] =1;
//    }
// }else{
//    cartData[itemId]={};
//    cartData[itemId][size]=1;

//    }

// await userModel.findByIdAndUpdate(userId, {cartData})
// res.json({success: true, message: "Added to Cart"})

// } catch (error) {
//  console.log(error)
// res.json({success: false, message: error.message})

    
// }


// }



// //update Cart
// export const updateCart= async ( req, res) =>{

//     try {
         
//         const { userId, itemId, size, quantity} = req.body;
//     const userData = await userModel.findById(userId)
//     const cartData= await userData.cartData

//     cartData[itemId][size]= quantity;

// await userModel.findByIdAndUpdate(userId, {cartData})
// res.json({success: true, message: "Cart Updated"})

//     } catch (error) {
//         console.log(error)
// res.json({success: false, message: error.message})


//     }

// }

// //get User Cart
//  export const getUserCart= async ( req, res) =>{
// try {
      
//    const {userId} = req.body;
//     const userData = await userModel.findById(userId)
//     const cartData = await userData.cartData
//     res.json({success: true, cartData})
// } catch (error) {
//       console.log(error)
// res.json({success: false, message: error.message})
// }

// }
 


