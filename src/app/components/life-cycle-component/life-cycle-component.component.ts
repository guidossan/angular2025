import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './life-cycle-component.component.html',
  styleUrl: './life-cycle-component.component.scss'
})
export class LifeCycleComponentComponent implements OnChanges, OnInit, DoCheck{

  @Input() public number=0;
  public myText = signal('Gui');

  //apenas para inveção de dependência quando iniciado o componente
  constructor(
    private fb: FormBuilder
  ){}
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  //Changes detections
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);

  }
  //detecta mudança
  ngDoCheck():void{
    console.log('ngDoCheck');

  }

}
