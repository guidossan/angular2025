import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, shareReplay, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('x-vida-ful-stack','dev');

  const reqClone = req.clone({ headers })
  //toda requisição passa por ele
  return next(reqClone).pipe(
    shareReplay(),
    //tenta mais duaz vezes com delay de 1000s
    retry({ count: 2, delay:1000 }),
    catchError((error:HttpErrorResponse)=> {
      return throwError(()=> error);
    })
  );
};
