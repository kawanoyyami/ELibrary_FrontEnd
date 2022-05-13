import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import IErrorResponse from '../../Models/errorModels';
import { IProjectUpdate } from '../../Models/projectModels';

const updateProject = async (projectUpdate:IProjectUpdate):Promise<boolean> => {
    const result = await api().put<IProjectUpdate | IErrorResponse>(`/Projects`, projectUpdate);

    throwIfError(result);

    return  result.status === 200; 
    
}

export default updateProject;