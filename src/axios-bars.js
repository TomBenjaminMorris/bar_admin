import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hapihour.io/api',
});

export default instance;