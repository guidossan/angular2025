import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, Observable, shareReplay, tap, throwError } from 'rxjs';

interface ITask{
  id:string;
  title:string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public name= signal('Guilherme');
  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setListTask = signal<ITask[] | null>(null);
  get getListTask(){
    return this.#setListTask.asReadonly();
  }
  public httpListTasks$(): Observable<Array<ITask>>{
    //restaura todos para null
    this.#setListTask.set(null)
    //faz a request
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res))
    );
  }

  #setIdTask = signal<ITask | null>(null);
  get getIdTask(){
    return this.#setIdTask.asReadonly();
  }
  #setIdError = signal<ITask | null>(null);
  get getIdError(){
    return this.#setIdError.asReadonly();
  }
  public httpTaskId$(id:string): Observable<ITask>{
    //restaura todos para null
    this.#setListTask.set(null)
    this.#setIdError.set(null)
    //faz a request
    return this.#http.get<ITask>(`${this.#url()}${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setIdTask.set(res)),
      catchError((error:HttpErrorResponse)=> {
        this.#setIdError.set(error.error.message);
        return throwError(()=> error);
      })
    );
  }

  #setTaskCreate = signal<ITask | null>(null);
  get getTaskCreatek(){
    return this.#setTaskCreate.asReadonly();
  }
  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError(){
    return this.#setTaskCreateError.asReadonly();
  }
  public httpTaskCreate$(title:string): Observable<ITask>{
    this.#setTaskCreateError.set(null)
    return this.#http.post<ITask>(this.#url(), { title }).pipe(
      shareReplay(),
      catchError((error:HttpErrorResponse)=> {
        this.#setTaskCreateError.set(error.error.message);
        return throwError(()=> error);
      })
    );
  }

  #setTaskUpdate = signal<ITask | null>(null);
  get getTaskUpdate(){
    return this.#setTaskUpdate.asReadonly();
  }
  public httpTaskUpdate$(id:string,title:string): Observable<ITask>{
    return this.#http.patch<ITask>(`${this.#url()}${id}`, { title }).pipe(
      shareReplay(),
      catchError((error:HttpErrorResponse)=> {
        this.#setIdError.set(error.error.message);
        return throwError(()=> error);
      })
    );
  }
  #setTaskDelete = signal<ITask | null>(null);
  get getTaskDelete(){
    return this.#setTaskDelete.asReadonly();
  }
  public httpTaskDelete$(id:string): Observable<void>{
   return this.#http
   .delete<void>(`${this.#url()}${id}`, {})
   .pipe(
    shareReplay()
    ,catchError((error:HttpErrorResponse)=> {
    this.#setIdError.set(error.error.message);
    return throwError(()=> error);
  }));
  }


}
