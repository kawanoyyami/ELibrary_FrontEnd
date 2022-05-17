import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const addBook = async (formData: FormData): Promise<boolean> => {
  const result = await api().post(`/Book/add`, formData);

  throwIfError(result);

  return result.status === 200;
};

export default addBook;
