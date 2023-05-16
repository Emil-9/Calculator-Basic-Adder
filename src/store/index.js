import { configureStore } from "@reduxjs/toolkit";
import calculationSlice from "./input-slice";

// create store
const store = configureStore({
  reducer: {
    calculationReducer: calculationSlice
  }
});

export default store;
