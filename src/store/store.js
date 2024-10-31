import SellerReducers from './slices/seller'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    naviList: SellerReducers
  }
})

export default store