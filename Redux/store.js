import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducers";

export const store = configureStore({ reducer: RootReducer });
