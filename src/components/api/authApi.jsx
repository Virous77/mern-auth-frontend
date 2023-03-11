import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api-v1/users`;

export const register = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData);

  return data;
};
