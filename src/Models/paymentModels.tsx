export interface IProductResponse {
  name: string;
  id: string;
  description: string;
  images: string;
  defaultPriceId: string;
  defaultPrice: Price;
}

interface Price {
  unitAmount: number;
}
export interface IPortalRequest {
  returnUrl: string;
}
export interface IPortalRespons {
    url: string;
  }
export interface IProductRequeste {
  priceId: string;
  UserId: number;
}

export interface ISesionResponse {
  sessionId: string;
}
