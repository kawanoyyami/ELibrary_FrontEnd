import * as Yup from 'yup';

export interface IUserResponse{
    fullName:string;
    userName:string;
    email:string;
    phone:string;
    dob?:Date;
}

export interface IUserUpdate{
    id:number;
    fullName:string;
    userName:string;
    email:string;
}

export const UserUpdate = Yup.object().shape({
    userName: Yup.string().required('Please enter username')
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    // )
  });
  