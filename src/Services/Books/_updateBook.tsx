import { IBookUpdate } from "../../Models/bookModels";
import api from "../axios-config";
import { throwIfError } from "../Helpers/throwCustomException";

const updateBook = async (formData: FormData):Promise<boolean> =>{
    const result = await api().put(`/Book`,formData);

    throwIfError(result);

    return result.status === 200;
}

export default updateBook;