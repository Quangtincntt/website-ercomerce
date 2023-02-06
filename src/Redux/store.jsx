import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import confirmationReducer from "./confirmationSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    confirmation: confirmationReducer,
  },
});

export default store;
