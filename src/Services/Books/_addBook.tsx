import { IBookCreate } from '../../Models/bookModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const addBook = async (bookCreate: IBookCreate): Promise<boolean> => {
  const result = await api().post(`/Book/add`, bookCreate);

  throwIfError(result);

  return result.status === 200;
};

export default addBook;
