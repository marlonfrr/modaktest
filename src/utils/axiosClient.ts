import axios from 'axios';
import {BASE_URL} from '../consts/urls';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
