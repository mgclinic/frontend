import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../website/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken(); // Get token from AuthService

  if (token && !authService.verifyToken(token)) {
    authService.logout(); // Log out if the token is invalid
  }

  const clonedReq = token
    ? req.clone({
        setHeaders: { Authorization: `${token}` },
      })
    : req;

  return next(clonedReq);
};
