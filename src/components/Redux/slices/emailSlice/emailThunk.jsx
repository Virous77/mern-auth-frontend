import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendAutomatedEmail } from "../../../api/authApi";

export const getSendAutomatedEmail = createAsyncThunk(
  "auth/getSendAutomatedEmail",
  async (emailData, thunkAPI) => {
    try {
      return await sendAutomatedEmail(emailData);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
