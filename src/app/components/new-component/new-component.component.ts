import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiServiceService } from '@components/services/api.service.service';

@Component({
  selector: 'app-new-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent implements OnInit{
  public name = "New component";
  #apiService = inject(ApiServiceService);

  ngOnInit(): void {
    console.log(this.#apiService.name());
  }
  
}
