import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiServiceService } from '@components/services/api.service.service';

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
  public getTask = signal<null | Array<{
    id:string;
    title:string;
  }>>(null);
  //getTask passa a ser um observable e pode ser resgatado direto com async
  public getTask$ = this.#apiService.httpListTasks$();

  ngOnInit(): void {
    this.getTask$.subscribe({
      next: (next) => {
        console.log(next)
        this.getTask.set(next)
      },
      error: (error) => console.log(error),
      complete: () => console.log('Complete'),
    })
  }

}
