import { axiosInstance } from './index';

export const numverifyAPI = {
  checkNumber: (phoneNumber: string) =>
    axiosInstance.get(`number_verification/validate?number=7${phoneNumber}`),
};
