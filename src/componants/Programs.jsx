import React from 'react'
import program_1 from '../assets/program-1.png'
import program_2 from '../assets/program-2.png'
import program_3 from '../assets/program-3.png'
import caption_1 from '../assets/program-icon-1.png'
import caption_2 from '../assets/program-icon-2.png'
import caption_3 from '../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='w-full flex justify-between p-20 pt-5' name='program'>
      <div className='m-5 rounded-2xl relative  '>
        <img className='rounded-2xl' src={program_1} alt="" />
        <div className=' flex items-center absolute cursor-pointer  hover:opacity-100 opacity-0 justify-center flex-col text-white bottom-0 right-0 left-0 top-0 rounded-md bg-[rgba(0,15,152,0.3)]'>
          <img className='h-12 ' src={caption_1} alt="" />
          <p className=''>Graduation Degree</p>
        </div>
      </div>
      <div className='m-5 rounded-2xl relative '>
        <img className='rounded-2xl' src={program_2} alt="" />
        <div className=' flex items-center absolute cursor-pointer  opacity-0 hover:opacity-100 justify-center flex-col text-white bottom-0 right-0 left-0 top-0 rounded-md bg-[rgba(0,15,152,0.3)]'>
          <img className='h-12 ' src={caption_2} alt="" />
          <p className=''>Masters Degree</p>
        </div>
      </div>
      <div className='m-5 rounded-2xl relative '>
        <img className='rounded-2xl' src={program_3} alt="" />
        <div className=' flex items-center absolute cursor-pointer opacity-0 hover:opacity-100 justify-center flex-col text-white bottom-0 right-0 left-0 top-0 rounded-md bg-[rgba(0,15,152,0.3)]'>
          <img className='h-12 ' src={caption_3} alt="" />
          <p className=''> Post Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
