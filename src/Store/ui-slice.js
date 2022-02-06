import { createSlice } from "@reduxjs/toolkit";

const initialState = { SignUpFormIsVisible: false };

const uiSlice = createSlice({
  name: "SignUpForm",
  initialState: initialState,
  reducers: {
    toggleSignUpForm(state) {
      state.SignUpFormIsVisible = !state.SignUpFormIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
