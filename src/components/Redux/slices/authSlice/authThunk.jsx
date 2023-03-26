import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  userStatus,
  updateUser,
  sendVerificationEmail,
  verifyUser,
  changePassword,
  forgetPassword,
  resetPassword,
  allUsers,
  updateUserRole,
  deleteUser,
} from "../../../api/authApi";

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

export const getUpdateUser = createAsyncThunk(
  "auth/getUpdateUser",
  async (userData, thunkAPI) => {
    try {
      return await updateUser(userData);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSendVerificationEmail = createAsyncThunk(
  "auth/getSendVerificationEmail",
  async (_, thunkAPI) => {
    try {
      return await sendVerificationEmail();
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getVerifyUser = createAsyncThunk(
  "auth/getVerifyUser",
  async (verificationToken, thunkAPI) => {
    try {
      return await verifyUser(verificationToken);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getChangePassword = createAsyncThunk(
  "auth/getChangePassword",
  async (userData, thunkAPI) => {
    try {
      return await changePassword(userData);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getForgetPassword = createAsyncThunk(
  "auth/getForgetPassword",
  async (email, thunkAPI) => {
    try {
      return await forgetPassword(email);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getResetPassword = createAsyncThunk(
  "auth/getResetPassword",
  async (userData, thunkAPI) => {
    try {
      return await resetPassword(userData);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "auth/getAllUsers",
  async (_, thunkAPI) => {
    try {
      return await allUsers();
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUpdateUserRole = createAsyncThunk(
  "auth/getUpdateUserRole",
  async (userData, thunkAPI) => {
    try {
      return await updateUserRole(userData);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getDeleteUser = createAsyncThunk(
  "auth/getDeleteUser",
  async (id, thunkAPI) => {
    try {
      return await deleteUser(id);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
