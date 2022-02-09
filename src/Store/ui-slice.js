import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RegFormIsVisible: false,
  SignUpForm: false,
  LoginForm: false,
};

const uiSlice = createSlice({
  name: "RegForm",
  initialState: initialState,
  reducers: {
    toggleRegForm(state) {
      state.RegFormIsVisible = !state.RegFormIsVisible;
    },
    isLogin(state) {
      state.LoginForm = true;
      state.SignUpForm = false;
    },
    isSignUp(state) {
      state.SignUpForm = true;
      state.LoginForm = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
