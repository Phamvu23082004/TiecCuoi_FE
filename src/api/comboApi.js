import axiosClient from "./axiosClient";

export const getCombos = async (params) => {
  return await axiosClient.get("/combos", { params });
};