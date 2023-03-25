import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice/authSlice";
import emailSlice from "./slices/emailSlice/emailSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    email: emailSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
