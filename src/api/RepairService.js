import axiosClient from "./axiosClient";

export const getRepairs = () => axiosClient.get("/repairs");
export const getRepair = (id) => axiosClient.get(`/repairs/${id}`);
export const createRepair = (data) => axiosClient.post("/repairs", data);
export const updateRepair = (id, data) => axiosClient.put(`/repairs/${id}`, data);
export const deleteRepair = (id) => axiosClient.delete(`/repairs/${id}`);
export const checkRepairStatus = (query) =>
    axiosClient.get(`/repairs/personal?query=${encodeURIComponent(query)}`);
