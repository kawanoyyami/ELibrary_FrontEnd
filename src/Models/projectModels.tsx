import * as Yup from 'yup';

export interface IProjectResponseWithUserData {
  fullName: string;
  userName: string;
  projects:IProjectResponse[];
}

export interface IProjectResponse {
  id: number;
  name: string;
}

export interface IProjectCreate {
  UserId: number;
  Name: string;
}

export interface IProjectUpdate {
  id: number;
  name: string;
}
export const ProjectSchema = Yup.object().shape({
  projectName: Yup.string().required('You should enter project name'),
});
