import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import PlaceOrder from './PlaceOrder';
const Cart = () => {
  const {products, currency,cartItems, UpdateQuantity ,navigate}=useContext(ShopContext);
const[CartData, setCartData] =useState([]);

useEffect(()=>{
  if (products.length >0 ){
let tempData= [];
  for(const items in cartItems){
    for(const item in cartItems[items]){
      if ( cartItems[items][item ] > 0){
         tempData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item],
         })
      }
    }
  }
  setCartData(tempData);
  }
},[cartItems,products])

return(
   <div className='border-t pt-14'>
      <div className='mb-3 text-2xl'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
 {
 CartData.map((item, index)=>{
  const productData= products.find((product)=>product._id === item._id)
  return(

    <div key={index} className='py-4 border-t border-b  text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4'> 
    <div  className='flex items-start gap-6'>

      <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
<div>
  <p className='font-medium text-xs sm:text-lg'>{productData.name}</p>
  <div className='mt-2 flex items-center gap-5'>
    <p>{currency}{productData.price}</p>
    <p className='bg-slate-50 border px-3 sm:px-2 sm:py-1'>{item.size}</p>
  </div>
   </div>
     </div>
    <input onChange= {(e)=>e.target.value==='' || e.target.value==='0'? null : UpdateQuantity(item._id,item.size,Number(e.target.value)) } className=' border max-w-10 sm:max-w-20 sm:max-h-10 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
    <img onClick={()=>UpdateQuantity(item._id,item.size,0)} className='w-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
    </div>
    
  )
  
 })
 }

      </div>
      <div className='flex justify-end my-20'>
  <div className='w-full sm:w-[450px]'>
      <CartTotal/>
      <div className='w-full text-end'>
      <button onClick= {()=>navigate('/placeOrder')} className=' bg-black py-3 border rounded px-8 text-white text-sm my-8'>PROCEED TO CHECKOUT</button>
      </div>
  </div>
      </div>
    </div>
  )
}

export default Cart
