import React, { useRef } from "react";
import TrollyBag from "./TrollyBag";
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import cartSlice from "../features/cart/cartSlice";

const SecThree = () => {

    const btnRef = useRef()
    const {cartArr} = useSelector((state)=>state.carts)

  const handlePrevious = ()=>{
    btnRef.current.scrollBy(-365,0)
  }

   const handleNext = ()=>{
    btnRef.current.scrollBy(365,0)
   }

  return (
    <div className="flex mx-1.5 mb-10">
        <button onClick={handlePrevious} className="text-2xl"><FaChevronLeft/></button>
      <div ref={btnRef} className="flex  overflow-y-scroll scroll-smooth slider-cart">
        {cartArr.map((item) => (
            <TrollyBag key={item._id} item={item} />
            ))}
      </div>
            <button type="button" onClick={handleNext} className="text-2xl"><FaChevronRight/></button>
    </div>
  );
};

export default SecThree;
