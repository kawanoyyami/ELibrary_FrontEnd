/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/ban-types */
import userSubjectBehavior from './_userSubject';
import { IJWToken, ILogin } from '../../../Models/authModels';
import { throwCustomException } from '../../Helpers/throwCustomException';
import api from '../../axios-config';

export const logout = async () => {
  userSubjectBehavior.removeUserSubject();
};

export const login = async (values: ILogin): Promise<any> => {
  const result = await api().post<IJWToken>(`/Auth/login`, values);

  throwCustomException(result);

  const token = (result as IJWToken);

  // console.log(result);

  if(token != null)
  userSubjectBehavior.createUserSubject(token.token);
};
