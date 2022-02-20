import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RegFormIsVisible: false,
  SignUpForm: false,
  LoginForm: false,
  ErrorIs: false,
  ErrorMsg: null,
  isSuccses: false,
  isMobileNavigation: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    toggleRegForm(state, action) {
      if (action.payload) {
        state.RegFormIsVisible = action.payload.activeType;
      } else {
        state.RegFormIsVisible = !state.RegFormIsVisible;
      }
    },
    isLogin(state) {
      state.LoginForm = true;
      state.SignUpForm = false;
    },
    isSignUp(state) {
      state.LoginForm = false;
      state.SignUpForm = true;
    },
    isFormNotification(state, action) {
      state.ErrorIs = action.payload.ErrorIs;
      state.ErrorMsg = action.payload.msg;
      state.isSuccses = action.payload.isSuccses;
    },
    toggleMoblieNavigation(state, action) {
      state.isMobileNavigation = action.payload.activeType;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
