import * as Yup from 'yup';

export interface IReportResponse {
  id: number;
  name: string;
  link: string;
  createdDate: string;
}

export interface IReportCreate {
  name: string;
  link: string;
  projectId: number;
}

export interface IReportUpdate {
  id: number;
  name: string;
  link: string;
  createdDate: string;
}

export const NewReportSchema = Yup.object().shape({
  reportName: Yup.string().required('provide report name'),
  reportLink: Yup.string().required('provide report link'),
  projectName: Yup.number().required(),
});
