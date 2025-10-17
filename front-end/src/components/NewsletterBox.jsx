import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
        <div className='text-2xl font-medium text-gray-800' >Subscribe now & get 30% Discount</div>
        <p className='mt-3 text-gray-400'>Subscribe now and get an exclusive discount on your first purchase with us today </p>
  <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border '>
  <input className='w-full sm:flex-1 pl-3 outline-none' type='email' placeholder='Enter your email'/>
  <button type='submit' className='bg-black text-white text-xs px-10 py-4' > SUBSCRIBE </button>

  </form>


    </div>
      
   
  )
}

export default NewsletterBox
