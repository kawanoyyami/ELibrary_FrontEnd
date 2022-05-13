import { IBookUpdate } from "../../Models/bookModels";
import api from "../axios-config";
import { throwIfError } from "../Helpers/throwCustomException";

const updateBook = async (bookUpdate:IBookUpdate):Promise<boolean> =>{
    const result = await api().put(`/Book`,bookUpdate);

    throwIfError(result);

    return result.status === 200;
}

export default updateBook;