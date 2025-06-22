import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './core/interceptor/request.interceptor';
import { responseInterceptor } from './core/interceptor/response.interceptor';
import { provideCore } from './core/core.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor])),
    ...provideCore(),
  ],
};
