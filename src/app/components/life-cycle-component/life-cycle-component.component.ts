import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './life-cycle-component.component.html',
  styleUrl: './life-cycle-component.component.scss'
})
export class LifeCycleComponentComponent implements OnChanges{

  @Input() public number=0;

  //apenas para inveção de dependência quando iniciado o componente
  constructor(
    private fb: FormBuilder
  ){}

  //Changes detections
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
   
  }

}
