
export interface IAuthorWothBooks{
    id:number;
    fullName:string;
    books:IBookResponse[];
}

export interface IBookResponse {
    id: number;
    title: string;
    isFree: boolean;
    imagePath: string;
    description: string;
    amazonLink:string;
  }