import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://peterson-solution1.vercel.app/api/peterson",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;