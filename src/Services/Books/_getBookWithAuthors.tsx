import { appendFile } from 'fs';
import { IBookResponseWithAuthor } from '../../Models/bookModels';
import IErrorResponse from '../../Models/errorModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const getBookWithAuthors = async (
  id: number
): Promise<IBookResponseWithAuthor | IErrorResponse> => {
    const result = await api().get<IBookResponseWithAuthor | IErrorResponse>(
      `/Book/${id}/Authors`
    );

    throwIfError(result);

    return result;
 
  
};

export default getBookWithAuthors;
