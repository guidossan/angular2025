import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit{
  /*
  ViewChild resgata os dados do html ou do componente apos iniciado na tela
  */
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value)
  }
}
