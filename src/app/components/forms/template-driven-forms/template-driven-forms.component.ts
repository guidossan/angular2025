import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven-forms',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{comida:string, preco:string}>>([
    {
      comida: 'X-salada', preco:'R$10,00'
    },
    {
      comida: 'X-bacon', preco:'R$15,00'
    },
    {
      comida: 'X-double bacon', preco:'R$20,00'
    },
    {
      comida: 'X-egg', preco:'R$10,00'
    },
  ]);

  public submitForm(form: NgForm){
    if(form.value){
      console.log(form.value);
    }
  }
}
