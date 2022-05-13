
import { IBookResponse } from '../../Models/authorModels';
import IErrorResponse from '../../Models/errorModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const getBookByTitile = async (title: string): Promise<IBookResponse | IErrorResponse> => {
  const result = await api().get<IBookResponse | IErrorResponse>(`/Book/Titile/${title}`);

  console.log(result);
  throwIfError(result);

  return result.data;
};

export default getBookByTitile;
