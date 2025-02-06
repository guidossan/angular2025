import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnInit, signal, SimpleChanges, AfterViewInit, ViewChild, ElementRef, AfterContentInit, ContentChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder } from '@angular/forms';
import { takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-life-cycle-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './life-cycle-component.component.html',
  styleUrl: './life-cycle-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleComponentComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, OnDestroy{

  public myNumber = signal(0);
  @Input() set inputNumber(number: number){
    this.myNumber.set(number);
  };
  public myText = signal('Gui');


  //private destroy$ = timer(0,1000).pipe(
  //  takeUntilDestroyed()
  //).subscribe({
  //  next: (next) => console.log('next', next),
  //  error: (error) => console.log('error', error),
  //   complete: () => console.log('complete'),
  //});

  //apenas para inveção de dependência quando iniciado o componente
  constructor(
    private fb: FormBuilder
  ){}

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    //this.destroy$.unsubscribe();
  }
  @ViewChild('content') public content!: ElementRef;
  //resgata os valores passados que vem no ng content
  @ContentChild('text') public text!: ElementRef;
  //apos visualização e inicializado totalmente
  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit');
    //console.log(this.content.nativeElement.innerText);
  }

  ngAfterContentInit(): void {
    //console.log(this.text.nativeElement.innerText);
    //console.log('ngAfterContentInit');
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
  }

  //Changes detections
  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges', changes);

  }
  //detecta mudança
  ngDoCheck():void{
    //console.log('ngDoCheck');

  }

}
