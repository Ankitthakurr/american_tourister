import React from 'react'
import image from "../assets/secFourImage.webp"

const LeftSide = () => {
  return (
    <div className='w-3/5 clip-path max-md:w-11/12  '>
      <img className='w-full' src={image} alt="" />
    </div>
  )
}

export default LeftSide
