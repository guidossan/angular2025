import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    CustomPipePipe
  ],
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
