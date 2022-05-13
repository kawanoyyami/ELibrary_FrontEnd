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
}

export interface IBookUpdate {
  id: number;
  title: string;
  pageCount: number;
  isFree: boolean;
  imagePath: string;
  description: string;
}

export interface IBookResponseWithAuthor {
  id: number;
  title: string;
  authors: IAuthorResponse[];
}

export interface IAuthorResponse{
  id:number;
  fullName:string;
  dob:Date;
  areaOfInteresnt:string;
}