import IErrorResponse from '../../Models/errorModels';
import { IUserResponse } from '../../Models/userModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const getUser = async (id: number): Promise<IUserResponse | IErrorResponse> => {
  const result = await api().get<IUserResponse | IErrorResponse>(`/User/${id}`);
  throwIfError(result);

//   ToDo Remove This 
  console.log(result);

  return result;
};

export default getUser;
