import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { handleRemove } from '../features/cart/cartSlice';

const AddToCart = ({item}) => {
  const dispatch = useDispatch()

  
  return (
   
     <div className=" bg-slate-100 text-xs p-4 m-2">
    <div className="flex items-center justify-between ">
      <img className="w-20" src={item.image} alt="" />
      <span>
        <p>{item.name}</p>
        <p>Medium</p> <p>Red</p>
      </span>
      <p className="text-lg">₹{item.price.toLocaleString()}.00</p>
      <select name="" id="">
        <option >1</option>
      </select>
    </div>
    <div className="flex justify-evenly text-gray-500">
      <button onClick={()=>dispatch(handleRemove(item._id))} title="Remove" className="flex items-center">
        <FaRegTrashAlt />
        &nbsp; Remove{" "}
      </button>
      <button title="Move to Wishlist" className="flex items-center">
        {" "}
        <FaHeart />
        &nbsp; Move to Wishlist
      </button>
    </div>
  </div>
   
  )
}

export default AddToCart
