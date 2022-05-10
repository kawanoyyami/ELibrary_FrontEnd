import { IRegisterRequest } from '../../../Models/authModels';
import api from '../../axios-config';
import { throwIfError } from '../../Helpers/throwCustomException';

const register = async (values: IRegisterRequest): Promise<any> => {
  const fullname = `${values.firstName} ${values.lastName}`;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { firstName, lastName, ...parsedValues } = values;
  const queryJSON = { fullname, ...parsedValues };

  const data = await api().post(`/Auth/register`, queryJSON);

  //   @TODO remove this
  console.log(data); 
  console.log(queryJSON); 

  throwIfError(data);
};

export default register;
