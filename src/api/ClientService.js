import axiosClient from "./axiosClient";

export const getClients = () => axiosClient.get("/clients");
export const getClient = (id) => axiosClient.get(`/clients/${id}`);
export const createClient = (data) => axiosClient.post("/clients", data);
export const updateClient = (id, data) => axiosClient.put(`/clients/${id}`, data);
export const deleteClient = (id) => axiosClient.delete(`/clients/${id}`);
