/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-else-return */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { parse } from 'path';
import { logout } from './Auth/Login';
import refreshToken from './Guard/refreshToken';
import isLogged from './Auth/Login/_isLogged';
import { getExp } from './Auth/SessionParser';
import authHeader from './Helpers/authHeader';

const api = (): AxiosInstance => {
  const jwtToken = authHeader();

  console.log('interceptors', jwtToken);

  const instance = axios.create({
    baseURL: 'https://localhost:7001/',
    timeout: 360000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  instance.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = jwtToken.Authorization;

    // refreshAccessToken
    if (isLogged() && !config.headers.isRefreshingToken) {
      const expireTimeUnix = getExp();
      // console.log(expireTimeUnix);
      const expireTime = new Date(parseInt(expireTimeUnix, 10) * 1000);
      const curentaTime = new Date();
      const date_difference =
        (expireTime.getTime() - curentaTime.getTime()) / 1000;
      // console.log(date_difference);
      if (date_difference <= 900 && date_difference > 10) {
        refreshToken();
      }
    }

    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data, // JSON.parse(response.data),
    (reason: AxiosError) => {
      if ([401, 403].indexOf(reason?.response?.status || 0) !== -1) logout();
      // console.log(reason.response?.status);

      return {
        error: reason.response?.data || 'your input is not good',
        statusText: reason.response?.statusText,
      };
    }
  );

  return instance;
};

export default api;
