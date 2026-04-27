import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
  loading: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register: (state, action) => {
      state.loading = false;
    },
  },
});
export const { register } = registerSlice.actions;
export default registerSlice.reducer;
