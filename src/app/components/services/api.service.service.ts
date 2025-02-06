import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public name= signal('Guilherme');
  constructor() { }
}
