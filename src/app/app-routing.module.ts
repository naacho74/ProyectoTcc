import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartoComponent } from './cuarto/cuarto.component';
import { HomeComponent } from './home/home.component';
import { MercanciaComponent } from './mercancia/mercancia.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:"",component: PrincipalComponent, pathMatch:"full"},
  {path:"mercancia", component:HomeComponent},
  {path:"cuarto", component:CuartoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
