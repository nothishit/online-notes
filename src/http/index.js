import axios from "axios";

export const API_URL = 'https://quickly-benevolent-moose.cloudpub.ru:443'
// export const API_URL = 'http://localhost:8000'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.params = {
        token: token,
        location: "headers"
    }
    return config
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/auth/refresh`, {
              withCredentials: true,
            })
            localStorage.setItem("token", response.data.access_token);
            return $api.request(originalRequest);
        } catch (error) {
            console.log("НЕ АВТОРИЗОВАН");
        }
    }
    throw error;
})

export default $api;