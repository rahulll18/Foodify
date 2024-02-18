import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //app store reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
