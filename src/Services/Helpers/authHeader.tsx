import isLogged from '../Auth/Login/_isLogged';
import userSubjectBehavior from '../Auth/Login/_userSubject';

const authHeader = () => {
  // return authorization header with jwt token
  const currentUser = userSubjectBehavior.currentUserValue();
  if (isLogged()) {
    return { Authorization: `Bearer ${currentUser}` };
  }
  return { Authorization: '' };
};
export default authHeader;
