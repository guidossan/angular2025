import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, NewComponent, TemplateBindingComponent],
  template: `
    <router-outlet/> 
    <h1>Hello</h1>
    <div class="theme-dark">

      <app-new-component />
      <app-template-binding/>
    </div>
    
  `,
})
export class AppComponent {
  title = 'primeiro-hello-latest';
}
