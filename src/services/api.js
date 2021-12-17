import axios from 'axios';

const api = axios.create({
    baseURL: 'http://170.83.160.85:8080/.new/api/wine/api/',
})

export default api;