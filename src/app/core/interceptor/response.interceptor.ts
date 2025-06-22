import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlerService = inject(ErrorHandlerService);

  return next(req).pipe(
    tap(() => {
      console.log('sucess');
    }),
    catchError((error) => {
      errorHandlerService.handleError(error);
      return throwError(() => error);
    })
  );
};
