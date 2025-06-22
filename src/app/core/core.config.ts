import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './interceptor/request.interceptor';
import { responseInterceptor } from './interceptor/response.interceptor';

export const provideCore = () => [
  provideHttpClient(
    withInterceptors([requestInterceptor, responseInterceptor])
  ),
];
