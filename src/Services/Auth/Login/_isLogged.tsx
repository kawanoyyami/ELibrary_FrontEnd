import userSubjectBehavior from './_userSubject';

const isLogged = () => {
  const currentUser = userSubjectBehavior.currentUserValue();
  return currentUser.length > 0;
};

export default isLogged;
