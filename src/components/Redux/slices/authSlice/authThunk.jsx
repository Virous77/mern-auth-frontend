import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login, logout, userStatus } from "../../../api/authApi";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      return await register(userData);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      return await login(userData);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const { message } = await logout();
      return thunkAPI.fulfillWithValue(message);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserStatus = createAsyncThunk(
  "auth/getUserStatus",
  async (_, thunkAPI) => {
    try {
      return await userStatus();
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
