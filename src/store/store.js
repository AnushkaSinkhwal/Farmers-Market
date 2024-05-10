import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import commentReducer from "./commentSlice";

//for creating redux store for handling overall application state data
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    commentData: commentReducer,
  },
});

export default store;
