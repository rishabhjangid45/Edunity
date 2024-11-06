import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu-icon.png'
import './NAvbar.css'
import { Link } from 'react-scroll'



const Navbar = () => {
  const [stickey, setStickey] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setStickey(true);
      } else {
        setStickey(false);
      }
    })
  },[])
  const[toggle, setToggle] = useState(false);
  function toggleclick(){
    setToggle(!toggle)
  }
  return (
   <nav className={`w-full h-[75px] flex px-5  fixed top-0 left-0 z-10 items-center justify-between ${stickey ? "dark-nav" : ""} `}  >
    <img className='h-[40px]  p-0' src={logo} alt="" />
    <ul className={`fixed right-0 bottom-0 top-0 bg-[#343861] w-[20%] flex flex-col p-4 gap-3 h-fit ${toggle ? "" : "hidden"} 
                  md:flex md:flex-row md:bg-transparent md:justify-end md:gap-5 md:w-full md:text-white  md:items-center md:font-thin
  `} >
        <li className='cursor-pointer'><Link to='home' smooth={true} duration={500} offset={0}>Home </Link> </li>
        <li className='cursor-pointer'><Link to='program' smooth={true} duration={500} offset={-200}>Program</Link></li>
        <li className='cursor-pointer'> <Link to='about' smooth={true} duration={500} offset={-150}>About</Link></li>
        
        <li className='cursor-pointer'><Link to='campus' smooth={true} duration={500} offset={-190}>Campus</Link></li>
        <li className='cursor-pointer'><Link to ='testimonials' smooth={true} duration={500} offset={-160}>Testimonials</Link></li>
        <li><button className='bg-white rounded-full px-4 py-2  text-black'><li><Link to='contact' smooth={true} duration={500} offset={-100}>Contact us</Link></li></button></li>
         </ul>
    <img className='h-7 cursor-pointer md:hidden ' onClick={toggleclick} src={menu} alt="" />
   </nav>
  )
}

export default Navbar
