import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const logUser = localStorage.getItem('userDtls');
  const token = localStorage.getItem('token');
  if (logUser && token) {
    return true;
  }
  router.navigateByUrl('login');
  return false;
};
