import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { CrearCiudadComponent } from 'src/app/components/crear-ciudad/crear-ciudad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'crear-ciudad',
    component: CrearCiudadComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
