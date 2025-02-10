import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';
import { input } from '@angular/core';

export const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./pages/curso.routes').then((r)=> r.cursoRoutes),
  },
  //da para usar quando for fazer página de admin
  {
    path:'dashboard',
    children:[
      {
        path:'',
        title: 'Home da página',
        component:HomeComponent,
      },
      {
        path:'sobre',
        title: 'Sobre',
        loadComponent: () =>
           import('./pages/sobre/sobre.component').then((p) => p.SobreComponent),
      },
      {
        path:'servicos/:id',
        title: 'Serviços',
        loadComponent: () =>
          import('./pages/servicos-prestados/servicos-prestados.component').then((p) => p.ServicosPrestadosComponent),
      },
    ]
  },
  {
    path:'**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component'),
  }
];
