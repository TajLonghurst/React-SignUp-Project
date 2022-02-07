import { createSlice } from "@reduxjs/toolkit";

const initialState = { RegFormIsVisible: false };

const uiSlice = createSlice({
  name: "RegForm",
  initialState: initialState,
  reducers: {
    toggleRegForm(state) {
      state.RegFormIsVisible = !state.RegFormIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
