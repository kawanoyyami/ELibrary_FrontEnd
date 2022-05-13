import { IBookResponse } from '../../Models/authorModels';
import {
  IBookResponseWithAuthor,
  IPaginatedRequest,
} from '../../Models/bookModels';
import IErrorResponse from '../../Models/errorModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';
import getBooksPaginated from './_getBooksPaginated';
import getBookWithAuthors from './_getBookWithAuthors';

export { default as addBook } from './_addBook';
export { default as deleteBook } from './_deleteBook';
export { default as getBookByTitile } from './_getBookByTitle';
export { default as getBook } from './_getBook';
export { default as getBooksPaginated } from './_getBooksPaginated';
// export { default as getBookWithAuthors } from './_getBookWithAuthors';
export { default as updateBook } from './_updateBook';

export const getAllBooks = async (): Promise<IBookResponse[] | IErrorResponse> => {
  const result = await api().get<IBookResponse[] | IErrorResponse>(`/Book/all`);

  throwIfError(result);

  return result;
};

export const getAllAuthors = async (id: number) => {
  try {
    const books = await getBookWithAuthors(id);
    return books;
  } catch (e) {
    console.log(e);
  }
  return [
    {
      id: 0,
      fullName: '',
      dob: new Date(),
      areaOfInteresnt: '',
    },
  ];
};
