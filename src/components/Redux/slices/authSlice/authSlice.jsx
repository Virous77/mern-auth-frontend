import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authThunk";

const initialState = {
  isLoggedIn: false,
  user: null,
  users: [],
  twoFactor: false,
  isError: false,
  isSuccess: false,
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
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.verifiedUser = "";
    },
  },
  extraReducers(builder) {},
});

export const { RESET } = authSlice.actions;

export const useSelectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
