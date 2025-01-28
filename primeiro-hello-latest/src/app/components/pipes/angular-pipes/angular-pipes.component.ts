import { AsyncPipe, CommonModule, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule, DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {
  public date = signal(new Date());
  public json = signal({ name: 'John', age: 30, city: 'New York' });

  public loadingData$: Observable<string[]>= of([
    'Loading...',
    'Please wait...',
    'Fetching data...'
  ]).pipe(delay(2000));
}
