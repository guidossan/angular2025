import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosPrestadosComponent } from './servicos-prestados/servicos-prestados.component';

export const cursoRoutes: Routes = [

  {
    path:'',
    title: 'Home da página',
    loadComponent: () =>
      import('./home/home.component').then((p) => p.HomeComponent),
  },
  //carregar o componente somente quando for para ir para ele
  {
    path:'sobre',
    title: 'Sobre',
    loadComponent: () =>
        import('./sobre/sobre.component').then((p) => p.SobreComponent),
  },
  {
    path:'servicos/:id',
    title: 'Serviços',
    loadComponent: () =>
      import('./servicos-prestados/servicos-prestados.component').then((p) => p.ServicosPrestadosComponent),
  },

];
