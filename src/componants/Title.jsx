import React from 'react'

const Title = (props) => {
  return (
    <div className='text-center text-[#212ea0] text-[15px] font-medium uppercase'>
      <p className='text-l'>{props.subtitle}</p>
      <h2 className='text-3xl'>{props.title}</h2>
    </div>
  )
}

export default Title
