import api from "../axios-config"
import { throwIfError } from "../Helpers/throwCustomException";

const deleteProject = async (id:number):Promise<boolean>=>{
    const result = await api().delete(`/Projects/${id}`);
    throwIfError(result);

    return result.status === 200;
}

export default deleteProject;