/* eslint-disable no-console */
/* eslint-disable no-else-return */
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
    timeout: 360000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  instance.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = jwtToken.Authorization;

    // console.log(config);

    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data, // JSON.parse(response.data),
    (reason: AxiosError) => {
      // refreshAccessToken
      const originalRequest = reason.config;
      if (
        reason.response.data.code === 'token_not_valid' &&
        reason.response.status === 401 &&
        403
      ) {
        const refreshToken = localStorage.getItem('refresh_token');

        if (refreshToken) {
          const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

          // exp date in token is expressed in seconds, while now() returns milliseconds:
          const now = Math.ceil(Date.now() / 1000);
          console.log(tokenParts.exp);

          if (tokenParts.exp > now) {
            return instance
              .post('/token/refresh/', { refresh: refreshToken })
              .then((response) => {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);

                instance.defaults.headers.Authorization = `Bearer ${response.data.access}`;
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;

                return instance(originalRequest);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log('Refresh token is expired', tokenParts.exp, now);
            window.location.href = '/SignIn/';
          }
        } else {
          console.log('Refresh token not available.');
          window.location.href = '/SignIn/';
        }
      }

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
