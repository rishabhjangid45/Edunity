import React, { useRef } from 'react'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'

const Testimonials = () => {
    const slider=useRef();
    let tx=0;
    const slideforword = () => {
        if(tx > -50){
            tx-=25;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }
    const slidebackword = () => {
        if(tx < 0){
            tx+=25;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }


    return (
        <div className='  w-full  flex flex-col  justify-between p-24  pb-10 relative' name= 'testimonials'>
            <div className='flex justify-between w-[96%]  absolute left-7 top-56 '>

                <img className='  rounded-full  w-10 h-10 p-2 cursor-pointer bg-[#212ea0] ' src={back_icon} onClick={slidebackword} />
                <img className=' rounded-full w-10 h-10 p-2  cursor-pointer bg-[#212ea0]' src={next_icon} onClick={slideforword} />
            </div>

            <div className='overflow-hidden   '>
                <ul className='flex w-[200%] overflow-x-hidden transition-transform duration-300 ' ref={slider} >
                    <li className='list-none w-[50%] p-[20px]'>
                        <div className='shadow-[0 0 20px rgba(0,0,0,0.05)]'>

                            <div className='p-6 shadow-md rounded-lg'>

                                <div className='flex items-center  '>
                                    <img className='w-16 rounded-full border-4 border-[#212ea0]' src={user1} alt="" />
                                    <div className='flex flex-col items-start ml-6'>
                                        <h3 className='text-l text-[#212ea0]'>Willium Jamson</h3>
                                        <span className='font-thin'>Edusity usa</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim consequatur nostrum impedit porro commodi recusandae blanditiis et tenetur nulla repudiandae asperiores eum tempora consequuntur soluta molestias maxime, saepe vero ea fugiat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='list-none w-[50%] p-[20px]'>
                        <div className='shadow-[0 0 20px rgba(0,0,0,0.05)]' p-6>

                            <div className='p-6 shadow-md rounded-lg'>
                                <div className='flex items-center    '>

                                    <img className='w-16 rounded-full border-4 border-[#212ea0]' src={user2} alt="" />
                                    <div className='flex flex-col items-start ml-6'>
                                        <h3 className='text-l text-[#212ea0]'>Willium kackronsed</h3>
                                        <span className='font-thin'>Edusity usa</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim consequatur nostrum impedit porro commodi recusandae blanditiis et tenetur nulla repudiandae asperiores eum tempora consequuntur soluta molestias maxime, saepe vero ea fugiat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='list-none w-[50%] p-[20px]'>
                        <div className='shadow-[0 0 20px rgba(0,0,0,0.05)]'>

                            <div className='p-6 shadow-md rounded-lg'>

                                <div className='flex items-center    '>
                                    <img className='w-16 rounded-full border-4 border-[#212ea0]' src={user3} alt="" />
                                    <div className='flex flex-col items-start ml-6'>
                                        <h3 className='text-l text-[#212ea0]'>Willium karlos</h3>
                                        <span className='font-thin'>Edusity usa</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim consequatur nostrum impedit porro commodi recusandae blanditiis et tenetur nulla repudiandae asperiores eum tempora consequuntur soluta molestias maxime, saepe vero ea fugiat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='list-none w-[50%] p-[20px]'>
                        <div className='shadow-[0 0 20px rgba(0,0,0,0.05)]'>

                            <div className='p-6 shadow-md rounded-lg'>

                                <div className='flex items-center    '>
                                    <img className='w-16 rounded-full border-4 border-[#212ea0]' src={user4} alt="" />
                                    <div className='flex flex-col items-start ml-6'>
                                        <h3 className='text-l text-[#212ea0]'>Jaesn Jamson</h3>
                                        <span className='font-thin'>Edusity usa</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim consequatur nostrum impedit porro commodi recusandae blanditiis et tenetur nulla repudiandae asperiores eum tempora consequuntur soluta molestias maxime, saepe vero ea fugiat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Testimonials
