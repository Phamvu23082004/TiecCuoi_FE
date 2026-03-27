import axiosClient from "./axiosClient";

export const getFoods = async (params) => {
  return await axiosClient.get("/foods", { params });
};

