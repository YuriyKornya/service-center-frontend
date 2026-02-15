import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080",
    auth: {
        username: "user",
        password: "password"
    }
});

export default axiosClient;
