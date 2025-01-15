import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name= "Guilherme Martins";
  public age =21;
  public isDisabled = false;
  public srcValue ="https://i.pinimg.com/736x/91/af/65/91af653ad3b9fdf58ab75999f17387b8.jpg"
  public isTextDecoration = this.age >=21 ? 'underline' : 'none';
  public sum(){
    return this.age ++;
  }
  public sub(){
    return this.age --;
  }
  public onKeyDown(event:Event){
    return console.log(event)
  }
  public onMouseEvent(event : MouseEvent){
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY

    });
  }
}
