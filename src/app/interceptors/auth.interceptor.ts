import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../website/services/auth.service';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators'; // Import finalize operator

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const loaderService = inject(LoaderService);
  const token = authService.getToken(); // Get token from AuthService

  if (token && !authService.verifyToken(token)) {
    authService.logout(); // Log out if the token is invalid
  }

  const clonedReq = token
    ? req.clone({
        setHeaders: { Authorization: `${token}` },
      })
    : req;

  loaderService.show(); // Show loader on request start

  return next(clonedReq).pipe(
    finalize(() => loaderService.hide()) // Hide loader on request completion
  );
};
