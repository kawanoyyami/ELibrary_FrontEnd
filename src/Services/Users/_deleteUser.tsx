import React from 'react'
import api from '../axios-config'
import { throwIfError } from '../Helpers/throwCustomException';

const deleteUser = async (id: number):Promise<boolean> =>{
    const res = await api().delete(`/User/${id}`);
    throwIfError(res);

    return res.status === 200;
}

export default deleteUser;
