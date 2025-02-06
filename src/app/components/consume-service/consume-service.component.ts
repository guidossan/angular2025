import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiServiceService } from '@components/services/api.service.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit{

  #apiService = inject(ApiServiceService);


  public gatListTask = this.#apiService.getListTask;
  public gatIdTask = this.#apiService.getIdTask;
  //forma com signal
  //public getTask$ = toSignal(this.#apiService.httpListTasks$());
  //getTask passa a ser um observable e pode ser resgatado direto com async
  //public getTask$ = this.#apiService.httpListTasks$();

  ngOnInit(): void {
    this.#apiService.httpListTasks$().subscribe();
    this.#apiService.httpTaskId$('iOZ14alU0sTdxb0ffkn2').subscribe();
  //  this.getTask$.subscribe({
  //    next: (next) => console.log(next),
  //    error: (error) => console.log(error),
  //    complete: () => console.log('Complete'),
  //  })
  }
  public httpTaskCreate(title:string){
    return this.#apiService.httpTaskCreate$(title).pipe(
      concatMap(()=>{
        return this.#apiService.httpListTasks$();
      })
    ).subscribe({
      next: (next)=> console.log(next)
    });
  }

}
