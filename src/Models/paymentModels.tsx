export interface IProductResponse{
    name:string;
    id:string;
    description:string;
    images:string;
    defaultPriceId:string;
    defaultPrice:Price;

}

interface Price{
    unitAmount:number;
}

export interface IProductRequeste{
    priceId:string;
}

export interface ISesionResponse {
    sessionId: string;
  }