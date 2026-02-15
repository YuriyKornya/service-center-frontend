import axiosClient from "./axiosClient"; 


export const getDevices = () => axiosClient.get("/devices");
export const getDevice = (id) => axiosClient.get(`/devices/${id}`);
export const createDevice = (data) => axiosClient.post("/devices", data);
export const updateDevice = (id, data) => axiosClient.put(`/devices/${id}`, data);
export const deleteDevice = (id) => axiosClient.delete(`/devices/${id}`);
