import React from 'react'
import Heading from "./Heading";
import Button from "./Button";

const RightSide = () => {
  return (
    <div className='w-2/5 flex flex-col justify-center gap-4 pr-10 max-lg:text-[10px] max-xl:text-sm max-[900px]:text-[7px] max-md:w-11/12 max-md:text-center'>
      <Heading headingText={"Best Sellers"}/>
      <p className='text-sm font-thin text-gray-700'>Shop American Tourister's best-sellers online. Discover the most popular, top-rated travel gear handpicked by American Tourister fans!</p>
      <div><Button btnText={"Shop Now"} /></div>
    </div>
  )
}

export default RightSide
