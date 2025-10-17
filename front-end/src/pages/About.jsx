import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl pt-8 text-center border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center text-gray-600 gap-6 md:wd-2/4'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem blanditiis officia corporis provident sed quam laborum eveniet veniam quaerat adipisci, libero optio? Aspernatur molestias sed atque quis. Maxime eos quo error pariatur quam qui atque nobis asperiores eum reiciendis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et exercitationem minus expedita debitis quae distinctio, veniam nemo quia veritatis, facilis deleniti. Culpa cumque consequuntur, itaque hic quo error. Nemo quisquam illum exercitationem ullam dolorum, enim necessitatibus fugit quia voluptatum laudantium libero architecto, ex, ipsum sapiente vel accusantium doloribus at!</p>
     <b className='text-gray-800'>Our Mission</b>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto dicta blanditiis, illum necessitatibus quis rem cum sit velit perferendis earum dolorem consectetur consequuntur ea mollitia magni voluptas sapiente ratione?
     </p>
           </div>
          

    </div>
     <div className='text-2xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
           </div>
           <div className='flex flex-col md:flex-row mb-20 text-sm'>
            <div  className='flex flex-col gap-6 px-10 py-8 md:px-16 sm:py-20 border' >
              <b >Quality Assurance:</b>
              <p className='text-gray-600'> We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
            <div  className='flex flex-col gap-6 px-10 py-8 md:px-16 sm:py-20 border' >
              <b >Convenience:</b>
              <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div  className='flex flex-col gap-6 px-10 py-8 md:px-16 sm:py-20 border' >
              <b >Exceptional Customer Service:</b>
              <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
           </div>
           <NewsletterBox/>
     </div>
  )
}

export default About
