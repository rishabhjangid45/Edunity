import React from 'react'
import about_img from '../assets/about.png'
import playicon from '../assets/play-icon.png'
const About = () => {
  return (
    <div className=' p-24 pt-0 flex items-center justify-between w-full  ' name='about'>
      <div className='basis-[40%]  relative'>
        <img className='w-[100%] rounded-xl' src={about_img} alt="" />
        <img className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={playicon} alt="" />
      </div>
      <div className='basis-[56%] '>
         <h3 className='text-[#212ea0] text-l font-medium uppercase'>ABOUT UNIVERSITY</h3>
         <h2 className='text-3xl mb-4'> Nurturing tommorow s leaders today </h2>
         <p>Embark on a transformative educational journey with our univeersity's comprehensive education programs and facilities.curriculam is designed to empower stuents with the knowledge,skils , and experence needed to excel in the dynaic field of education </p>
         <p>With a focus on innovation ,hans on the cutting-edge technologies and industry best practices,our programs are designed to equip students with the skills and knowledge needed to succeed in today's fast-paced world of education</p>
         <p>
         Our programs are designed to equip students with the skills and knowledge needed to succeed in today's fast-paced world of education.offers a comprehensive curriculum that is designed to equip students with the skills and knowledge needed to succeed in today's fast-paced world of education
         </p>
      </div>
    </div>
  )
}

export default About
