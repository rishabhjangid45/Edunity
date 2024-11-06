import React from 'react'
import gallary1 from '../assets/gallery-1.png'
import gallary2 from '../assets/gallery-2.png'
import gallary3 from '../assets/gallery-3.png'
import gallary4 from '../assets/gallery-4.png'
import whitearrow from '../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className=' w-full flex  justify-center items-center p-24 pb-10 pt-16 flex-col' name = 'campus'>
       <div className='flex items-center justify-between '>
        <img className='w-[23%] rounded-xl ' src={gallary1} alt="" />
        <img className='w-[23%] rounded-xl ' src={gallary2} alt="" />
        <img className='w-[23%] rounded-xl ' src={gallary3} alt="" />
        <img className='w-[23%] rounded-xl ' src={gallary4} alt="" />
       </div>
       <button className='bg-[#212ea0] rounded-full px-4 py-2 mt-6 text-white flex justify-center items-center'>View more <img className='h-4 w-6 ml-2' src={whitearrow} alt="" /></button>
    </div>
  )
}

export default Campus
