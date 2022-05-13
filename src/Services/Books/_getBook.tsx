
import { IBookResponse } from '../../Models/authorModels';
import IErrorResponse from '../../Models/errorModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const getBook = async (id: number): Promise<IBookResponse | IErrorResponse> => {
  const result = await api().get<IBookResponse | IErrorResponse>(`/Book/${id}`);

  throwIfError(result);

  return result.data;
};

export default getBook;
