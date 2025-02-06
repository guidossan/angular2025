import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiServiceService } from '@components/services/api.service.service';

@Component({
  selector: 'app-consume-service',
  standalone:true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit{

  #apiService = inject(ApiServiceService);

  ngOnInit(): void {
    console.log(this.#apiService.name());
  }

}
