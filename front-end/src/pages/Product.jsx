import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {

   const { productId } = useParams();
   const { products, currency, addTocart, cartItems} =useContext(ShopContext);
   const [productData ,  setProductData]= useState(false);
   const [image, setImage]= useState('');
   const [size, setSize]= useState('');

   const fetchProductData= async()=>{
    products.map((item)=>{
      if(item._id === productId){
setProductData(item)
setImage(item.image[0]);

return null;
      }
    })
   }

 useEffect(()=>{
  fetchProductData();
},[productId, products])



  return productData ?(
    <div className='border-t-2 p-10 transition-opacity ease-in duration-500 opacity-100 '>
    {/* Product Data */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
 {/* Product Image */}

<div className='flex-1 flex flex-col-reverse sm:flex-row gap-3'>

  <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
   {
    productData.image.map((item, index)=>(
      <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
    ))
   }
</div>

<div className='w-full sm:w-[70%]'>
  <img className='w-full h-auto' src={image} alt="" />
</div>

 </div>

<div className='flex-1'>
  <h1 className=" font-medium text-2xl mt-2">{productData.name}</h1>


<div className="flex items-center gap-1 mt-2">
  <img src={assets.star_icon} alt=""className='w-3 5' />
  <img src={assets.star_icon} alt=""className='w-3 5' />
 <img src={assets.star_icon} alt=""className='w-3 5' />
 <img src={assets.star_icon} alt=""className='w-3 5' />
  <img src={assets.star_dull_icon} alt=""className='w-3 5' />
  <p className='pl-2'>(22)</p>
</div>
<p className='mt-5 font-medium text-3xl'>{currency}{productData.price}</p>
<p className='mt-5 md:w-4/5 text-gray-500'>{productData.description}</p>

<div className='flex flex-col gap-4 my-8'>
<p>Select Size</p>
<div className='flex gap-2'>
{
 productData.sizes && productData.sizes.map((item, index)=>(
    <button onClick={()=>setSize(item)} className={` border py-2 px-4 bg-gray-100 ${item === size ?'border-orange-500': '' }`} key={index} >{item}</button>
 ))
}
</div>
</div>

<button onClick={()=>addTocart(productData._id, size)} className='py-3 px-8 bg-black text-sm text-white active:bg-gray-700'>ADD TO CART</button>
<hr className='mt-7 sm:wd-4/5' />
<div className='flex flex-col gap-1 mt-3 text-sm text-gray-500'>
   <p>Easy return and exchange policy within 24hours</p>
    <p>Easy return and exchange policy within 24hours</p>
  <p>Easy return and exchange policy within 24hours</p>
</div>
</div>
    </div>
    {/*------------------DESCRIPTION & REVIEW SECTION---------------- */}
<div className="mt-20">
  <div className="flex">
    <b className='border text-sm py-3 px-5 '>Description</b>
    <p className='border text-sm py-3 px-5 '>Reviews (122)</p>
  </div>

<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, temporibus. Sit, illo.necessitatibus esse praesentium laborum laboriosam velit sunt iste obcaecati ducimus debitis vitae nihil. Et perspiciatis magni repellat nesciunt commodi eaque dignissimos deserunt explicabo.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, temporibus. Sit, illo.necessitatibus esse praesentium laborum laboriosam velit sunt iste obcaecati ducimus debitis vitae nihil. Et perspiciatis magni repellat nesciunt commodi eaque dignissimos deserunt explicabo.</p>
</div>
    </div>

    <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  
  ): <div className='opacity-0'></div>
  }





  
export default Product