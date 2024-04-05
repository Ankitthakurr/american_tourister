import React from "react";
// import tBagFirst from "../assets/tBagFirst.webp";

import { FaHeart } from "react-icons/fa";
import { addCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const TrollyBag = ({item}) => {
   const dispatch = useDispatch()
  

  const handleCartAdd = ()=>{
    dispatch(addCart(item))
  }
 

  return (
    <div className="flex flex-col min-w-[25%] p-1 max-md:min-w-[33.3%] max-sm:min-w-[50%] ">
        <span  className="text-gray-300 flex justify-end mr-2 mb-1.5 p-1.5 rounded-xl text-lg cursor-pointer">
          <FaHeart />
        </span>
        <img
          className="hover:cursor-pointer hover:scale-105 hover:opacity-80 transition ease-in   "
          src={item.image}
          alt=""
        />
        <h1 className="text-xl font-bold text-center mt-1">{item.name}</h1>
        <span className="flex justify-center gap-2">
          <h1 className="text-xl font-bold text-center text-red-600">
            ₹ {item.price.toLocaleString()}
          </h1>
          <p className="text-gray-800 text-sm font-semibold mt-1.5 "><del>₹ {item.oldPrice.toLocaleString()}</del></p>
        </span>
        <button type="button" onClick={handleCartAdd} className="cartBtn ">ADD TO CART</button>
      </div>
  );
};

export default TrollyBag;
