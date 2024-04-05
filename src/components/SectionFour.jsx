import React from 'react'
import RightSide from './RightSide'
import LeftSide from './LeftSide'

const SectionFour = () => {
  return (
    <>
    <div className='flex justify-center items-center w-[95%] m-auto max-md:flex-col'>
        <LeftSide/>
      <RightSide/>
    </div>
    </>
  )
}

export default SectionFour
