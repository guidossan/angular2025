import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, shareReplay, tap } from 'rxjs';

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
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res))
    );
  }

  #setIdTask = signal<ITask | null>(null);
  get getIdTask(){
    return this.#setIdTask.asReadonly();
  }
  public httpTaskId$(id:string): Observable<ITask>{
    return this.#http.get<ITask>(`${this.#url()}${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setIdTask.set(res))
    );
  }

  #setTaskCreate = signal<ITask | null>(null);
  get getTaskCreatek(){
    return this.#setTaskCreate.asReadonly();
  }
  public httpTaskCreate$(title:string): Observable<ITask>{
    return this.#http.post<ITask>(this.#url(), { title }).pipe(
      shareReplay(),
      tap((res) => this.#setTaskCreate.set(res))
    );
  }

  #setTaskUpdate = signal<ITask | null>(null);
  get getTaskUpdate(){
    return this.#setTaskUpdate.asReadonly();
  }
  public httpTaskUpdate$(id:string,title:string): Observable<ITask>{
    return this.#http.patch<ITask>(`${this.#url()}${id}`, { title }).pipe(
      shareReplay(),
      tap((res) => this.#setTaskUpdate.set(res))
    );
  }


}
