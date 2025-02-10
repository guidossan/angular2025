import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  //proteje uma rota em especifico
  
  return true;
};
