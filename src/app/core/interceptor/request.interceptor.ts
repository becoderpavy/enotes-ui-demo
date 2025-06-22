import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request interceptor');
  const token = localStorage.getItem('token');
  if (token) {
    const newReqData = req.clone({
      setHeaders: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        // Authorization: `Bearer ${token}`,
      },
    });
    return next(newReqData);
  }
  return next(req);
};
