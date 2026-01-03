import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const fetchUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};
