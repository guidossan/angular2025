import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template: `
    <router-outlet/>
    <h1>Hello</h1>
    <div class="theme-dark">

      <!--<app-new-component />-->
      <!--<app-template-binding/>-->
      <app-template-variables/>
    </div>

  `,
})
export class AppComponent {
  title = 'primeiro-hello-latest';
}
