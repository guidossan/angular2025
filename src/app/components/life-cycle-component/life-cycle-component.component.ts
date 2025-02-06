import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './life-cycle-component.component.html',
  styleUrl: './life-cycle-component.component.scss'
})
export class LifeCycleComponentComponent {

}
