import { createSlice } from "@reduxjs/toolkit";
import tBagFirst from "./tbagFirst.webp";
import tBagSecond from "./tBagSecond.webp";
import tBagThird from "./tBagThird.webp";
import tBagFourth from "./tBagFourth.webp";
import tBagFifth from "./tBagFifth.webp";
import tBagSixth from "./tBagSixth.webp";


const initialState = {
 cartArr : [
        {
          name: "FORNAX",
          price: 8100,
          image: tBagFirst,
          oldPrice: 10800,
          _id: 1,
        },
        {
          name: "PLAYBLUE",
          image: tBagSecond,
          price: 7100,
          oldPrice: 9800,
          _id: 2,
        },
        {
          name: "AMERICAN",
          image: tBagThird,
          price: 7500,
          oldPrice: 9000,
          _id: 3,
        },
        {
          name: "DELL",
          image: tBagFourth,
          price: 8100,
          oldPrice: 10800,
          _id: 4,
        },
        {
          name: "HPBAG",
          image: tBagFifth,
          price: 6100,
          oldPrice: 4800,
          _id: 5,
        },
        {
          name: "SKYBAG",
          image: tBagSixth,
          price: 4500,
          oldPrice: 5900,
          _id: 6,
        },
        {
          name: "AMERICAN",
          image: tBagThird,
          price: 7500,
          oldPrice: 9000,
          _id: 7,
        },
      ],
 addToCart : [],
 check : []
     
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      addCart : (state,action)=>{
        return({
          ...state,
          addToCart : state.check.includes(action.payload._id)  ? [...state.addToCart ] : [action.payload , ...state.addToCart],
          check : state.check.includes(action.payload._id) ? [...state.check] : [action.payload._id , ...state.check ] ,
        })
      },
      handleRemove : (state,action)=>{
       return({
         ...state,
         addToCart : state.addToCart.filter((item) => item._id !== action.payload),
         check : state.check.filter((item)=> item !== action.payload)
       })
      }
    },
})
export const {addCart,handleRemove} = cartSlice.actions
export default cartSlice.reducer