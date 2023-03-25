import { createSlice } from "@reduxjs/toolkit";
import { getSendAutomatedEmail } from "./emailThunk";

const initialState = {
  sendingEmail: false,
  message: "",
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      ////send AutomatedEmail
      .addCase(getSendAutomatedEmail.pending, (state) => {
        state.sendingEmail = true;
      })
      .addCase(getSendAutomatedEmail.fulfilled, (state, action) => {
        state.sendingEmail = false;
        state.message = action.payload;
      })
      .addCase(getSendAutomatedEmail.rejected, (state, action) => {
        state.sendingEmail = false;
        state.message = action.payload;
      });
  },
});

export const {} = emailSlice.actions;

export default emailSlice.reducer;
