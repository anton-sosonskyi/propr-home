import axios, { AxiosError } from 'axios';
import { throwErrorToast } from 'src/utils/throw-toast';


export const mapApiClient = axios.create({
  baseURL: 'https://api.geoapify.com/v1/geocode/autocomplete',
});

mapApiClient.interceptors.response.use(
  undefined,
  (err: AxiosError<{ message: string }>) => {
    const title = err.response?.data?.message ?? err.message;
    throwErrorToast({ title });
    throw err;
  }
);