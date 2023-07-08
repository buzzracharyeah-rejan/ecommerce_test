import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
