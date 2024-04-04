import React from 'react'
import { FaUser } from 'react-icons/fa'
import { AiOutlineLogin } from "react-icons/ai";

const Tostify = () => {
  return (
    <div className='w-[170px] bg-white tostify flex flex-col justify-center items-center py-2 '>
      <p className='flex text-lg items-center border-b-[1px] border-gray-400'><FaUser />&nbsp;Hello Traveller!</p>
      <button className='flex  text-lg items-center'><AiOutlineLogin />&nbsp;Login/Register</button>
    </div>
  )
}

export default Tostify
