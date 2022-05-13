import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const deleteBook = async (id: number): Promise<boolean> => {
  const result = await api().delete(`/Book/${id}`);

  throwIfError(result);

  return result.status === 200;
};

export default deleteBook;
