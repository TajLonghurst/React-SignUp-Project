import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idToken: "",
  email: "",
  expiresIn: null,
  localId: null,
  refreshToken: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "AUTH",
  initialState: initialState,
  reducers: {
    Login(state, action) {
      state.idToken = action.payload.idToken;
      state.email = action.payload.email;
      state.expiresIn = action.payload.expiresIn;
      state.localId = action.payload.localId;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    Logout(state) {
      state.idToken = "";
      state.email = "";
      state.expiresIn = null;
      state.localId = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
