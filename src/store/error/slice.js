//src/store/error/slice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  openDialog: false,
  message: "",
  title: "",
};
export const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    showError(state, action) {
      state.openDialog = true;
      const { title, message } = action.payload;
      state.message = message;
      state.title = title;
    },
    clearError(state) {
      state.openDialog = false;
      state.message = "";
      state.title = "";
    },
  },
});
