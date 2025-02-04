import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    //validators serve para a segurança maior passar para o TS
    //Mais de um validator colocar em array
    name: ['', [Validators.required, Validators.email]],
    myStacks: this.#fb.group({
      front: ['Angular'], // Alterado para usar FormBuilder corretamente
      back: ['Java'] // Alterado para usar FormBuilder corretamente
    }),
    myFavoriteFoods: this.#fb.array([this.#fb.control('X-tudo')]) // Correção aqui
  });




  public update(){
    this.profileForm.patchValue({
      name: 'Guilherme',
    })
    //this.name.setValue('Guilherme')
  }

  public addFavoriteFoods(newFood: string){
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }
}
