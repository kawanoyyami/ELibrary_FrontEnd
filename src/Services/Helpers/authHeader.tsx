import isLogged from '../Auth/Login/_isLogged';
import userSubjectBehavior from '../Auth/Login/_userSubject';
// eslint-disable-next-line import/no-cycle

const authHeader = () => {
  const curentUser = userSubjectBehavior.curentUserValue();
  if (isLogged()) {
    return { Authorization: `Bearer ${curentUser}` };
  }
  return { Authorization: ` ${curentUser}` };
};

export default authHeader;
