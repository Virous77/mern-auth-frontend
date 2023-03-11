import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../../api/authApi";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      return await register(userData);
    } catch (error) {
      console.log(error);
    }
  }
);
