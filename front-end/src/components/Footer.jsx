import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] text-sm  my-10  mt-40'>
        <div>
          <img className='mb-8 w-36 cursor-pointer' src={assets.loga} alt="" />
          <p className='text-gray-600 cursor-pointer w-full md:w-2/3'>Thank you for shopping with us — your destination for timeless fashion and daily style.
We offer premium quality clothing curated to match your comfort, trend, and lifestyle.
Follow us on social media for updates, style tips, and exclusive deals.</p>
        </div>
        <div>
          <p className=' cursor-pointer text-xl font-medium mb-5'>CONTACT</p>
          <ul className=' cursor-pointerflex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Private Policy</li>
          </ul>
        </div>
        <div>
        <p className=' cursor-pointer text-xl font-medium mb-5' >GET IN TOUCH</p>
        <ul className=' cursor-pointer flex flex-col gap-1 text-gray-600'>
            <li>0320-9634479</li>
            <li>qaimzaidi91@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
    </div>
    
       <div>
        <hr />
    <p className='cursor-pointer py-5 text-center text-small'>Copyright 2025@ Zaiweb.dev - All Right Reserved.</p>
  </div>
    </div>
  
  

  )
}

export default Footer
