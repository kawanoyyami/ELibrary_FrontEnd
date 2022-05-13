import IErrorResponse from "../../Models/errorModels";
import { IProjectResponse, IProjectResponseWithUserData } from "../../Models/projectModels";
import api from "../axios-config"
import { throwIfError } from "../Helpers/throwCustomException";

const getProject = async (id:number):Promise<IProjectResponseWithUserData | IErrorResponse>=>{
    const result = await api().get<IProjectResponseWithUserData | IErrorResponse>(`/Projects/${id}`);
    throwIfError(result);

    return result.data;
}

export default getProject;