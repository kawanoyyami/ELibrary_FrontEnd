/* eslint-disable import/no-cycle */
import api from '../axios-config';
import { getExp } from '../Auth/SessionParser';

/* eslint-disable camelcase */
const refreshToken = () => {
  api()
    .get('/Auth/refresh-token', {
      headers: { isRefreshingToken: 'true' },
    })
    .then((responsee) => {
      localStorage.setItem('token', `"${responsee}"`);
    });
};

export default refreshToken;
