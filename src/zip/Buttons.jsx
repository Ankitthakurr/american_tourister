import React from 'react'

const Buttons = ({btntext}) => {
  return (
    <>
      <button className='text-lg font-bold btn max-sm:text-lg max-sm:p-3 my-1'>{btntext}</button>
    </>
  )
}

export default Buttons
