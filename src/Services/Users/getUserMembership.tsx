import { StringDecoder } from 'string_decoder';
import IErrorResponse from '../../Models/errorModels';
import { IPortalRequest, IPortalRespons } from '../../Models/paymentModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const getUserMembership = async (
  request: IPortalRequest
): Promise<IPortalRespons | IErrorResponse> => {
  const result = await api().post<IPortalRespons | IErrorResponse>(
    `/Payment/customer-portal`,
    request
  );

  throwIfError(result);

  return result;
};

export default getUserMembership;
