import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]'>
      <img className='  w-[max(10%,80px)]'  src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white text-xs border rounded-full sm:px-7 sm:py-2 py-2 px-5'>Log Out</button>
    </div>
  )
}

export default Navbar
