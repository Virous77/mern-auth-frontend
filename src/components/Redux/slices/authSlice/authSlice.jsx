import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserStatus,
} from "./authThunk";

const initialState = {
  isLoggedIn: false,
  user: null,
  users: [],
  twoFactor: false,
  isError: false,
  isLoading: false,
  message: "",
  verifiedUser: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.users = [];
      state.twoFactor = false;
      state.isError = false;
      state.isLoading = false;
      state.message = "";
      state.verifiedUser = "";
    },
  },
  extraReducers(builder) {
    builder
      //Register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //Login user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.message = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //get user status
      .addCase(getUserStatus.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.status;
        state.user = action.payload.user ? action.payload.user : null;
      })
      .addCase(getUserStatus.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { RESET } = authSlice.actions;

export const useSelectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const useSelectUser = (state) => state.auth.user;

export default authSlice.reducer;
