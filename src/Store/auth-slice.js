import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("idToken");
const isTokenTrue = !!initialToken;

const initialState = {
  idToken: initialToken,
  email: null,
  expiresIn: null,
  localId: null,
  refreshToken: null,
  isLoggedIn: isTokenTrue,
};

const authSlice = createSlice({
  name: "AUTH",
  initialState: initialState,
  reducers: {
    Login(state, action) {
      state.idToken = action.payload.idToken;
      localStorage.setItem("idToken", state.idToken);
      state.isLoggedIn = true;
      //   state.email = action.payload.email;
      //   state.expiresIn = action.payload.expiresIn;
      //   state.localId = action.payload.localId;
      //   state.refreshToken = action.payload.refreshToken;
    },
    Logout(state) {
      state.idToken = null;
      localStorage.removeItem("idToken");
      state.isLoggedIn = false;
      //   state.email = "";
      //   state.expiresIn = null;
      //   state.localId = null;
      //   state.refreshToken = null;
      //   state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
