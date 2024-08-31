import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://1532e97ba8d8302d.mokky.dev",
  headers: {
    Accept: "application/json",
  },
});
