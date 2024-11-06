import React from 'react'
import msg_icon from '../assets/msg-icon.png'
import email_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import whitearrow from '../assets/white-arrow.png'

import { useState } from 'react';


const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "993c9324-fc6a-4f38-8be6-5211c19ce8d4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };  
  return (
    <div className='flex justify-between  w-full p-24 pb-5 pt-5' name ='contact'>
      <div className='basis-1/2 text-[#676767]'>
        <h3 className='text-[25px] text-[#000f38] font-bold flex items-center '>Send Us A Message <img className='h-5 ml-3' src={msg_icon}  /></h3>
        <p className='max-w-[450px] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam voluptate! Commodi doloribus quibusdam explicabo, iste fuga reiciendis optio libero, quis, illo deserunt perspiciatis debitis 
        </p>
        <ul>
            <li className='flex items-center m-5 ml-0'> <img src={email_icon} alt="" className='w-5 mr-3' />Contact@dev.com </li>
            <li className='flex items-center m-5 ml-0'> <img src={phone_icon} className='w-5 mr-3' alt=""  /> +91 123456789</li>
            <li className='flex items-center m-5 ml-0'> <img src={location_icon} alt="" className='w-5 mr-3' /> godown street no 1, nagpur,maharashtra</li>
        </ul>
      </div>
      <div className='basis-1/2 '>
        <form onSubmit={onSubmit} >
            <label htmlFor="">Your name</label>
            <input type="text" name='name'  placeholder='Enter your name' required className='block w-[100%] bg-[#ebecfe] p-3 border-0 outline-0 mb-2 mt-1 resize-none' />
            <label htmlFor="">Phone number</label>
            <input type="number" name='phone'  placeholder='Enter your phone number' required className='block w-[100%] bg-[#ebecfe] p-3 border-0 outline-0 mb-2 mt-1 resize-none'  />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' className='block w-[100%] bg-[#ebecfe] p-3 border-0 outline-0 mb-2 mt-1 resize-none' ></textarea>
            <button className='bg-[#212ea0] rounded-full px-4 py-2 mt-3 text-white flex justify-center items-center'>Submit <img src={whitearrow} alt="" className='h-4 w-6 ml-2' /></button>
        </form>
        <span className='block mt-5 mb-5 '>{result}</span>
      </div>
    </div>
  )
}

export default Contact
