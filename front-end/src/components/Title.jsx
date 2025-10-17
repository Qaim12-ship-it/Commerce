import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex mb-3 gap-2 items-center'>
      <p className='text-gray-500 '>{text1}<span className='text-gray-700 font-medium '> {text2}</span></p>
      <p className='bg-gray-700 w-8 sm:w-12 sm:h-[2px] h-[1px] hidden sm:block'></p>
    </div>
  )
}

export default Title
