import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarritoComponent } from './componentes/carrito/carrito/carrito.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { CarritoCompraComponent } from './componentes/carrito-compra/carrito-compra.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'carrito', component: CarritoComponent, pathMatch: "full" },
  { path: 'carrito/compra/:id', component: CarritoCompraComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
