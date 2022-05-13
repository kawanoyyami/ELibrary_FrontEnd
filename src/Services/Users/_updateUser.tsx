import React from 'react';
import { IUserUpdate } from '../../Models/userModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const updateUser = async (userUpdate: IUserUpdate): Promise<boolean> => {
  const res = await api().put(`/User`, userUpdate);

  throwIfError(res);

  return res.status === 200;
};

export default updateUser;
