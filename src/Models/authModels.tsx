/* eslint-disable func-names */
import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
  userName: Yup.string().required('Please enter username'),
  password: Yup.string().required(),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   'Password must contain at least 8 characters, one uppercase, one number and one special case character'
  // )
});

export const registerSchema = Yup.object().shape({
  firstname: Yup.string().required('Please enter first name'),
  lastname: Yup.string().required('Please enter last name'),
  username: Yup.string().required('Please enter username'),
  email: Yup.string().required('Please enter your email address'),
  password: Yup.string().required(),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   'Password must contain at least 8 characters, one uppercase, one number and one special case character'
  // ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], "Passwords don't match.")
    .test('password-match', 'Password must match', function (value): boolean {
      return this.parent.password === value;
    }),
});

export interface ILogin {
  userName: string;
  password: string;
}

export interface IRegisterRequest {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

export interface IJWToken {
  token?: string;
  error?: string;
  statusText?: string;
}
