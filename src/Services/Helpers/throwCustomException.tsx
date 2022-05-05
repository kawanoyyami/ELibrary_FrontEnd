import { IJWToken } from '../../Models/authModels';
import IErrorResponse from '../../Models/errorModels';

export const throwCustomException = (handledResult: IJWToken): void => {
  if (handledResult.error) {
    console.log(handledResult.statusText, ' thorw ');
    throw new Error(handledResult.error);
  }
};

export const throwIfError = (handledResult: IErrorResponse): void => {
  if (handledResult?.error) {
    throw new Error(handledResult.error);
  }
};
