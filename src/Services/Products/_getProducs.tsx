import IErrorResponse from '../../Models/errorModels';
import { IProductResponse } from '../../Models/paymentModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const getProducs = async (
  numberofproducts: number
): Promise<IProductResponse | IErrorResponse> => {
  const result = await api().get<IProductResponse | IErrorResponse>(
    `/Payment/products/${numberofproducts}`
  );

  throwIfError(result);

  return result;
};

export default getProducs;
