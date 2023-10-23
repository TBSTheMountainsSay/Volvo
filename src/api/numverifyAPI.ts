import { axiosInstance } from './index';

export const numverifyAPI = {
  checkNumber: (phoneNumber: string) =>
    axiosInstance.get(
      `validate?access_key=${process.env.REACT_APP_TOKEN}&number=${phoneNumber}&country_code=RU&format=1`
    ),
};
