import authHeader from '../../Helpers/authHeader';

const UserIdClaim =
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';

const UserNameClaim =
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";

const RolesClaim =
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

const getJwtToken = (): string => authHeader().Authorization;

const parseJWT = (param: string): string =>
JSON.parse(atob(getJwtToken().split('.')[1]))[param];

export const getUserName = (): string => parseJWT(UserNameClaim);

export const getUserId = (): number => parseInt(parseJWT(UserIdClaim), 15);

export const getRoles = (): string => parseJWT(RolesClaim);

export const getRawToken = (): string => getJwtToken();

export const isAdmin = (): boolean => getRoles().indexOf('admin') > -1;
export const isFreeUser = (): boolean => getRoles().indexOf('FreeUser') > -1;
export const isPaidUser = (): boolean => getRoles().indexOf('PaidUser') > -1;
