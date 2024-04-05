import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const { addToCart } = useSelector((state) => state.carts);
  
  const [ price, setPrice ]= useState(0);
  const [ discount, setDiscount ]= useState(0);
  const [total,setTotal]= useState(0)


  useEffect(() => {
   let t =  addToCart.reduce((a,c)=> a + c.price ,0)
    setPrice(t)
    setDiscount((price/100)*10)
    setTotal(price - discount)
  }
  ,[addToCart,price,discount]);

 

  return (
    <div className="flex max-md:flex-col">
      <div className="leftCart w-[65%] max-md:w-[90%] max-md:m-auto">
        <div className="flex justify-between text-center bg-slate-100 text-xs font-bold p-3 m-2">
          <p>ITEM(S)</p>
          <p>TOTAL&nbsp;₹&nbsp;{total.toLocaleString()}.00</p>
        </div>
        <div className="flex  text-gray-400 text-xs font-bold p-3 ">
          <p className="w-[66%]">PRODUCT</p>
          <span className="flex justify-between w-[34%] ">
            <p>PRICE</p>
            <p>QUANTITY</p>
          </span>
        </div>
       <div className=' max-h-[350px] overflow-y-auto'>
       {addToCart.map((item, i) => (
          <AddToCart key={i} item={item} />
        ))}
       </div>
      </div>
      <div className="rigthCart w-[35%] py-8 max-md:w-[90%] max-md:m-auto ">
        <div className="w-[80%] m-auto flex gap-3 flex-col">
          <div className="flex  justify-between text-[15px] font-semibold">
            {" "}
            <p>MRP:</p>
            <span className="text-blue-600 font-thin">₹{price.toLocaleString()}.00</span>
          </div>
          <div className="flex  justify-between  text-[15px] font-semibold">
            <p>Discount:</p>
            <span className="text-blue-600 font-thin">₹{discount.toLocaleString()}.00</span>
          </div>
          <div className="flex justify-between  text-[15px] font-semibold">
            <p>Sub-Total:</p>
            <span className="text-blue-600 font-thin">₹{total.toLocaleString()}.00</span>
          </div>
          <hr />
          <div className="flex justify-between text-[15px] font-semibold">
            <p>Total:</p>
            <span className="text-blue-600 font-thin">₹{total.toLocaleString()}.00</span>
          </div>
          <hr />
          <p className="text-xs text-gray-400 ">COUPON CODE</p>
          <div className="p-2 bg-slate-100 border-dotted rounded border-gray-500 border-2">
            <span className="p-1 bg-slate-400 text-white rounded-full">%</span>
            <input
              className="ms-1 me-2 focus:outline-none bg-transparent text-xs max-[420px]:me-0 max-[1231]:me-0"
              type="text"
              placeholder="Enter your coupon here"
            />
            <button className="text-gray-300 border-2 rounded text-xs bg-white p-1 px-2 ms-2 max-[420px]:ms-0 ">
              APPLY COUPOUN
            </button>
          </div>
          <button className=" cartBtn ">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
