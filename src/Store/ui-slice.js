import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RegFormIsVisible: false,
  SignUpForm: false,
  LoginForm: false,
  ErrorMessageIs: null,
};

const uiSlice = createSlice({
  name: "UI",
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
    isError(state, action) {
      const errerStatus = action.payload;
      state.ErrorMessageIs = errerStatus.boolean;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
