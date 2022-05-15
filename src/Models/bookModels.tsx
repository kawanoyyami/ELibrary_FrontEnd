/* eslint-disable func-names */
import * as Yup from 'yup';
import { IBookResponse } from "./authorModels";

export interface IBookResponsePaginated {
  pageIndex: number;
  pageSize: number;
  total: number;
  items: IBookResponse[];
}
export interface IPaginatedRequest {
  pageIndex: number;
  pageSize: number;
}


export interface IBookCreate {
  title: string;
  pageCount: number;
  isFree: boolean;
  imagePath: string;
  description: string;
  amazonLink: string;
}

export interface IBookUpdate {
  id: number;
  title: string;
  pageCount: number;
  isFree: boolean;
  imagePath: string;
  description: string;
  amazonLink: string;
}

export interface IBookResponseWithAuthor {
  id: number;
  title: string;
  authors: IAuthorResponse[];
}

export interface IAuthorResponse {
  id: number;
  fullName: string;
  dob: Date;
  areaOfInteresnt: string;
}

export const bookAddSchema = Yup.object().shape({
  title: Yup.string().required('Please enter book title'),
  description: Yup.string().required('Please enter book description'),
  imageName: Yup.string().required('Please add book image'),
  imageSrc: Yup.string().required('Please add book image')
});