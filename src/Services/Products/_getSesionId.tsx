import IErrorResponse from '../../Models/errorModels';
import { ISesionResponse } from '../../Models/paymentModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';


const getSesionId = async (dataprice: {
  priceId: string;
}): Promise<ISesionResponse | IErrorResponse> => {
  const result = await api().post<ISesionResponse | IErrorResponse>(
    `/Payment/create-checkout-session`,
    dataprice
  );

  throwIfError(result);

  return result;
};

export default getSesionId;
