import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

interface ServerErrorResponse {
  code: number;
  errors: string[];
  message: string;
}

export const globalResponseErrorHandler = (error: AxiosError<ServerErrorResponse>) => {
  toast.error(error.message);
  return { message: error.message };
};
