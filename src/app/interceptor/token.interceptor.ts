import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    const newReqData = req.clone({
      setHeaders: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    return next(newReqData);
  } else {
    return next(req);
  }
};
