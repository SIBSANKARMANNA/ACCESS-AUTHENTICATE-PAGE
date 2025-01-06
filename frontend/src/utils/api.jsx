import axios from 'axios';

const api = axios.create({
    baseURL: 'https://user-authentication-system-qktq.onrender.com/api',
});

export default api;
