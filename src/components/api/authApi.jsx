import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api-v1/users`;

export const register = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData);

  return data;
};

export const login = async (userData) => {
  const { data } = await axios.post(`${API_URL}/login`, userData);
  return data;
};

export const logout = async () => {
  const { data } = await axios.get(`${API_URL}/logout`);

  return data;
};

export const userStatus = async () => {
  const { data } = await axios.get(`${API_URL}/login-status`);
  return data;
};

export const updateUser = async (userData) => {
  const { data } = await axios.patch(`${API_URL}/update-user`, userData);
  return data;
};

export const sendVerificationEmail = async () => {
  const { data } = await axios.post(`${API_URL}/verification-email`);
  return data.message;
};

export const verifyUser = async (verificationToken) => {
  const { data } = await axios.patch(
    `${API_URL}/verify-user/${verificationToken}`
  );
  return data.message;
};

export const changePassword = async (userData) => {
  const { data } = await axios.patch(`${API_URL}/change-password`, userData);
  return data.message;
};

/////Email
export const sendAutomatedEmail = async (emailData) => {
  const { data } = await axios.post(
    `${API_URL}/send-automated-email`,
    emailData
  );
  return data.message;
};
