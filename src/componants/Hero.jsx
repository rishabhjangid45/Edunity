import React from 'react'
import './Hero.css'
import arrow from '../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero flex flex-col h-screen w-full mb-10' name='home'>
      <h1 className='text-[4.3vw] text-white max-w-3xl '>We Ensure better education for a better World </h1>
      <p className='text-[1.7vw] text-white max-w-3xl font-[anzo2] '>Our mission is to provide a world-class education to all children and youth.
        We believe that every child deserves access to quality education.

      </p>
      <button className='bg-white rounded-full px-4 py-2 flex items-center  mt-8 text-black'>Explore more <img className='h-4 w-6 ml-2
      ' src={arrow} alt="" /></button>

      
    </div>
  )
}

export default Hero
