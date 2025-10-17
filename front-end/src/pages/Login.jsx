import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify';
import axios from 'axios'
const Login = () => {
  const [currentState, setCurrentState]= useState('Login')
 const {token, setToken, navigate, backendUrl} = useContext(ShopContext);
 const [name, setName] = useState('')
 const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

 const onSubmitHandler= async (event)=>{
event.preventDefault();

try {
  if ( currentState === 'Sign-Up'){
 const response = await axios.post( backendUrl + '/api/user/register', {name, email, password})
 if (response.data.success){
  setToken(response.data.token)
  localStorage.setItem('token',response.data.token )
 }else{
   toast.error(response.data.message)
 }
  }else{
 const response = await axios.post( backendUrl + '/api/user/login', { email, password})
 if (response.data.success){
  setToken(response.data.token)
  localStorage.setItem('token',response.data.token )
 }else{
   toast.error(response.data.message)
 }

  }
 
} catch (error) {
  console.log(error)
  toast.error(error.message)
}
}

useEffect(()=>{
if (token){
  navigate('/')
}
},[token])


useEffect(()=>{
if(!token && localStorage.getItem('token')){
  setToken(localStorage.getItem('token'))
}
},[])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center sm:max-w-96 w-[90%] m-auto mt-14 text-gray-800 gap-4'>
      <div className='inline-flex items-center mt-10 mb-2 gap-2'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none w-9 h-[2px] bg-gray-800' />
      </div>
      {currentState==='Login'?' ':<input onChange={(e)=>setName(e.target.value)} value={name} className='border w-full px-3 py-2 border-gray-800' type="text" placeholder='NAME'/>}
       <input  onChange={(e)=>setEmail(e.target.value)} value={email} className='border w-full px-3 py-2 border-gray-800' type="email" placeholder='EMAIL'/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border w-full px-3 py-2 border-gray-800' type="password" placeholder='PASSWORD'/>
        <div className='flex justify-between w-full text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password? </p>
          {
            currentState==='Login'
            ? <p onClick={()=> setCurrentState('Sign-Up')} className='cursor-pointer'>Create account </p>
            : <p  onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login here </p>
          }
        </div>
        <button className='bg-black text-white px-8 py-3  font-light mt-4 border rounded-sm'>{currentState=== 'Login'? 'Sign-In':'Sign-Up'}</button>
    </form>
  )
}

export default Login
