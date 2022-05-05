/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { logout } from './Auth/Login';

import authHeader from './Helpers/authHeader';

const api = (): AxiosInstance => {
  const jwtToken = authHeader();

  console.log('interceptors', jwtToken);

  const instance = axios.create({
    baseURL: 'https://localhost:7001/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  instance.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = jwtToken.Authorization;

    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data, // JSON.parse(response.data),
    (reason: AxiosError) => {
      if ([401, 403].indexOf(reason?.response?.status || 0) !== -1) logout();
      console.log(reason.response?.status);
      return {
        error: reason.response?.data || 'your input is not good',
        statusText: reason.response?.statusText,
      };
    }
  );

  return instance;
};

export default api;