import {
  IBookResponsePaginated,
  IPaginatedRequest,
} from '../../Models/bookModels';
import IErrorResponse from '../../Models/errorModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const getBooksPaginated = async (
  paginatedRequest: IPaginatedRequest
): Promise<IBookResponsePaginated | IErrorResponse> => {
  const result = await api().post('/Book/paginated-search', paginatedRequest);

  throwIfError(result);

  return result;
};

export default getBooksPaginated;
