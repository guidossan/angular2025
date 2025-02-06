import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, shareReplay } from 'rxjs';

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


  public httpListTasks$(): Observable<Array<ITask>>{
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay()
    );
  }
}
