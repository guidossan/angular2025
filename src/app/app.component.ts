import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from '@components/new-component/new-component.component';
import { TemplateBindingComponent } from '@components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "@components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from "@components/template/template-control-flow/template-control-flow.component";
import { TemplateDeferrableViewsComponent } from '@components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from '@components/signals/signals.component';
import { AngularPipesComponent } from "@components/pipes/angular-pipes/angular-pipes.component";
import { ReactiveFormsComponent } from '@components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from "@components/forms/template-driven-forms/template-driven-forms.component";
import { ContentComponent } from "@components/content/content.component";
import { HostElementsComponent } from "@components/host-elements/host-elements.component";
import { LifeCycleComponentComponent } from "@components/life-cycle-component/life-cycle-component.component";

import { environment } from 'environments/environment';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponentComponent
],
  template: `
    <router-outlet/>
    <h1>Hello</h1>
    <div class="theme-dark">

      <!--<app-new-component />-->
      <!--<app-template-binding/>-->
      <!--<app-template-variables/>-->
      <!--<app-template-control-flow/>-->
      <!--<app-template-deferrable-views/>-->
      <!--<app-signals/>-->
      <!--<app-angular-pipes/>-->
      <!--<app-template-driven-forms/>-->
      <!--<app-reactive-forms/>-->
      <!--
        <app-content>
          <header id="header">
            <p>Header</p>
          </header>
          <p text>Text</p>
          <p text>Text</p>
          <footer class="footer">
            <p>Footer</p>
          </footer>
        </app-content>
      -->
      <!--<app-host-elements/>-->
      <!--
        @if(boolean){

        <app-life-cycle-component [inputNumber]="number()">
          <p #text>Text</p>
        </app-life-cycle-component>
      }
      <button (click)="boolean = !boolean">Destroy</button>
    </div>
    -->


  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(){
    console.log(environment.env);
  }

}
