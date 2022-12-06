import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './components/Clientes/add-cliente/add-cliente.component';
import { ClientesListComponent } from './components/Clientes/clientes-list/clientes-list.component';
import { EditClienteComponent } from './components/Clientes/edit-cliente/edit-cliente.component';
import { AddTiendaComponent } from './components/Tienda/add-tienda/add-tienda.component';
import { TiendaListComponent } from './components/Tienda/tienda-list/tienda-list.component';
import { EditTiendaComponent } from './components/Tienda/edit-tienda/edit-tienda.component';
import { AddArticulosComponent } from './components/Articulos/add-articulos/add-articulos.component';
import { ArticulosListComponent } from './components/Articulos/articulos-list/articulos-list.component';
import { EditArticulosComponent } from './components/Articulos/edit-articulos/edit-articulos.component';

const routes: Routes = [
  { path: '', component : ClientesListComponent },
  { path: 'clientes' , component : ClientesListComponent },
  { path: 'clientes/add' , component : AddClienteComponent },
  { path: 'clientes/edit/:id' , component : EditClienteComponent},
  { path: 'tienda' , component : TiendaListComponent },
  { path: 'tienda/add' , component : AddTiendaComponent },
  { path: 'tienda/edit/:id' , component : EditTiendaComponent},
  { path: 'articulos' , component : ArticulosListComponent },
  { path: 'articulos/add' , component : AddArticulosComponent },
  { path: 'articulos/edit/:id' , component : EditArticulosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
