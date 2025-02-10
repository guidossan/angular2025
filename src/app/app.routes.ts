import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';

export const routes: Routes = [
  {
    path:'',
    title: 'Home da página',
    component:HomeComponent,
  },
  {
    path:'sobre',
    title: 'Sobre',
    component:SobreComponent,
  },
  {
    path:'servicos/:id',
    title: 'Serviços',
    component:ServicosPrestadosComponent,
  }
];
