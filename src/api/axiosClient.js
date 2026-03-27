import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.EM ||
      error.response?.data?.message ||
      error.message ||
      "Có lỗi xảy ra";

    return Promise.reject(new Error(message));
  }
);

export default axiosClient;