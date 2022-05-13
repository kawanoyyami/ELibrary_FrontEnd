/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import getUser from './_getUser';

export { default as getUser } from './_getUser';
export { default as deleteUser } from './_deleteUser';
export { default as updateUser } from './_updateUser';

export const getUserProps = async (userId: number): Promise<unknown> => {
  try {
    const user = await getUser(userId);

    // ToDo remove this
    console.log(user);

    return user;
  } catch (error) {
    console.log(error);
  }
};
