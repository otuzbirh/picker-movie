import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';

import toast from 'react-hot-toast';
import { apiUrl } from '@/data/config/api';
import { ServerErrorResponse } from '@/types';

const customAxios = axios.create({
  baseURL: apiUrl,
});

const requestHandler = (request: InternalAxiosRequestConfig) => {
  const token = import.meta.env.VITE_ACCESS_TOKEN;

  if (!token) {
    return request;
  }

  request.headers.Authorization = `Bearer ${token}`;

  return Promise.resolve(request);
};

const responseHandler = (response: AxiosResponse) => Promise.resolve(response);

const errorResponseHandler = (error: AxiosError<ServerErrorResponse>) => {
  console.warn(error);
  toast.error(error.response?.data?.status_message || error.message);
  return Promise.reject(error);
};

customAxios.interceptors.request.use((request) => requestHandler(request));

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorResponseHandler(error)
);

export default customAxios;
