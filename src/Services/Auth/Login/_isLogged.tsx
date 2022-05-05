import userSubjectBehavior from './_userSubject';

const isLogged = () => {
  const curentUser = userSubjectBehavior.curentUserValue();
  return curentUser.length > 0;
};

export default isLogged;
