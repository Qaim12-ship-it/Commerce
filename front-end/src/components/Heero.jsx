import React from 'react'
import { assets } from '../assets/assets'
const Heero = () => {
  return (
    <div className=' flex flex-col sm:flex-row border border-gray-400'>
    <div className='w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0'>
   <div className='text-[#414141]'>
    <div className='flex items-center gap-2'>
      <p className='bg-[#414141] h-[2px] w-8 md:w-11'></p>
      <p className='font-medium text-sm md:text-base '>OUR BEST SELLERS</p>
    </div>
    <h1 className='prata-regular text-3xl lg:text-5xl leading-relaxed sm:p-3'>Latest Arrivals</h1>
    <div className='flex items-center gap-2'>
    <p className='font-semibold text-sm md:text-base '>SHOP NOW</p>
      <p className='bg-[#414141] h-[2px] w-8 md:w-11'></p>
      
    </div>



   </div>

    
    </div>



     <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Heero
