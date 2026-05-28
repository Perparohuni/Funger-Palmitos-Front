import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if(req.url.includes('/login')) {
    return next(req);
  }

  if(token && token !== 'null') {
    const cloned = req.clone({
      setHeaders:{
        Authorization: "Bearer " + token
      }
    })

    return next(cloned);
  }
  return next(req);
};
