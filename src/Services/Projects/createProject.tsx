import { IProjectCreate } from '../../Models/projectModels';
import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

const createProject = async (
  projectCreate: IProjectCreate
): Promise<boolean> => {
    const result = await api().post(`/Projects/add`, projectCreate);

    throwIfError(result);

    return result.status === 200;
};

export default createProject;
