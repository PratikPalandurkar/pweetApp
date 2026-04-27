"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import registerSlice from "./registerSlice";
import { Api } from "./api/api";

const allReducers = combineReducers({
  register: registerSlice,
});

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(Api.middleware),
});

export default store;
