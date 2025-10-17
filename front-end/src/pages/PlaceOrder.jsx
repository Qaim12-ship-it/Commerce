import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const {navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products} = useContext(ShopContext);
const [formData,setFormData] = useState({
  firstName:'',
  lastName:'',
  email:'',
  street:'',
  city:'',
  state:'',
  zipcode:'',
  country:'',
  phone:''
})

const onChangeHandler = (event)=>{
   const name = event.target.name
   const value = event.target.value

   setFormData(data=>({...data,[name]:value}))
}




const onSubmitHandler = async (event)=>{
  event.preventDefault()
  try {
    let orderItems = []
    for (const items in cartItems) {
      for(const item in cartItems[items]){
        if (cartItems[items][item]>0) {
          const itemInfo = structuredClone(products.find(product=>product._id===items))
          if (itemInfo) {
            itemInfo.size=item
            itemInfo.quantity= cartItems[items][item]
            orderItems.push(itemInfo)
          }
        }
      }
      
    }
    
let orderData = {
  address:formData,
  items:orderItems,
  amount:getCartAmount()+delivery_fee
}

switch (method) {
  case 'cod':
    const response = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
    if (response.data.success) {
      console.log(response.data)
      setCartItems({})
      navigate('/orders')
    }
    else{
      toast.error(response.data.message)
    }
    break;

    default:
      break;

      case 'stripe':
      const responseStripe = await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})
      if (responseStripe.data.success) {
        const {session_url}= responseStripe.data
        window.location.replace(session_url)
      }
      else{
        toast.error(responseStripe.data.message)
      }


      break;

    
}

  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}
  



  return (
    <form onSubmit={onSubmitHandler} className=' border-t flex sm:flex-row flex-col sm:pt-14 justify-between gap-4 min-h-[80vh]'>
                            {/*left side*/}
      <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
        <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
<div className="flex gap-3">
  <input onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded px-3.5 py-1.5  w-full' type="text" placeholder='First name'/>
  <input onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded px-3.5 py-1.5  w-full' type="text" placeholder='Last name' />
</div>
<input onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="email" placeholder='Email address' />
<input onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="Street" placeholder='Street' />
<div className="flex gap-3">
  <input onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded px-3.5 py-1.5  w-full' type="text" placeholder='City'/>
  <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded px-3.5 py-1.5  w-full' type="text" placeholder='State' />
</div>
<div className="flex gap-3">
  <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded px-3.5 py-1.5  w-full' type="number" placeholder='Zipcode'/>
  <input onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded px-3.5 py-1.5  w-full' type="text" placeholder='Country' />
</div>
<input onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="Number" placeholder='Phone' />
      </div>
   {/*right side*/}
      <div className='mt-8'>                             
 <div className='mt-8 min-w-80'>

<CartTotal/>
  </div>
  <div className="mt-12">
    <Title text1={'PAYMENT'}  text2={'METHOD'}/>
                 {/*payment method selction*/ }
                 <div className='flex flex-col lg:flex-row gap-4'>
                  <div onClick= {()=>setMethod('stripe')} className='flex border gap-3 itmes-center cursor-pointer p-2 px-3 '>
                  <p  className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'? 'bg-green-800':''}`}></p>
                    <img  className='h-5 ml-8 mr-12' src={assets.stripe_logo} alt="" />
                  </div>
            
                  <div onClick= {()=>setMethod('cod')} className='flex border gap-3 itmes-center cursor-pointer p-2 px-3'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'? 'bg-green-800':''}`}></p>
                    <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
                   </div>
                 </div>
                 <div className='w-full text-end mt-8'>
      <button type='submit' className=' bg-black py-3 border rounded px-16 text-white text-sm my-1'>PLACE ORDER</button>
      </div>

      </div>
  </div>
      
    </form>
  )
}

export default PlaceOrder
