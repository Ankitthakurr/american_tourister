import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart/cartSlice"

const store = configureStore({
reducer : {
    carts:cart
}
})
export default store