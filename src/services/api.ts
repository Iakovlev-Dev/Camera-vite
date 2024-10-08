import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://camera-shop.accelerator.htmlacademy.pro';
const REQUEST_TIMEOUT = 5000;

export const createApi = ():AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});
