import { environment } from '../../environments/environment.development';

export const ApiEndpoint = {
  AUTH: {
    LOGIN: `${environment.apiUrl}/auth/login`,
    REGISTER: `${environment.apiUrl}/auth/register`,
  },
  NOTES: {
    ADD_NOTES: '',
  },
  MASTER: {
    GET_ACTIVE_CATEGORY: `${environment.apiUrl}/category/active`,
  },
};
