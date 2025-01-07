import axios from 'axios';

const api = axios.create({
    baseURL: 'https://access-authenticate-page.onrender.com/api',
});

export default api;
