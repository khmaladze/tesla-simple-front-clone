import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../features/car/carSlice";
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: { car: carReducer },
});
