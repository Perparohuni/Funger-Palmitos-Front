import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const mestreGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");

  if(!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if(payload.mestre === true){
      return true;
    }
  }catch(e) {
    console.log(e);
  }

  router.navigate(['/trapaceiro']);
  return false;
};
