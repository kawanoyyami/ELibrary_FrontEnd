import IErrorResponse from "../../Models/errorModels";
import { IProjectResponse, IProjectResponseWithUserData } from "../../Models/projectModels";
import api from "../axios-config";
import { throwIfError } from "../Helpers/throwCustomException";

const getUserProjects = async(id:number):Promise<IProjectResponseWithUserData | IErrorResponse> =>{
    const result = await api().get<IProjectResponseWithUserData | IErrorResponse>(`/User/${id}/projects`);

    throwIfError(result);

    return result;
}

export default getUserProjects;