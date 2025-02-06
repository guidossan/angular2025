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
  public gatListTask =this.#setListTask.asReadonly();


  public httpListTasks$(): Observable<Array<ITask>>{
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res))
    );
  }
}
