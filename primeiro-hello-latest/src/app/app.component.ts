import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, NewComponent],
  template: `
    <router-outlet/> 
    <h1>Hello</h1>
    <app-new-component />
    
  `,
})
export class AppComponent {
  title = 'primeiro-hello-latest';
}
