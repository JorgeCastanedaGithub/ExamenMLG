import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListComponent } from './components/Clientes/clientes-list/clientes-list.component';
import { AddClienteComponent } from './components/Clientes/add-cliente/add-cliente.component';
import { FormsModule } from '@angular/forms';
import { EditClienteComponent } from './components/Clientes/edit-cliente/edit-cliente.component';
import { AddTiendaComponent } from './components/Tienda/add-tienda/add-tienda.component';
import { TiendaListComponent } from './components/Tienda/tienda-list/tienda-list.component';
import { EditTiendaComponent } from './components/Tienda/edit-tienda/edit-tienda.component';
import { EditArticulosComponent } from './components/Articulos/edit-articulos/edit-articulos.component';
import { AddArticulosComponent } from './components/Articulos/add-articulos/add-articulos.component';
import { ArticulosListComponent } from './components/Articulos/articulos-list/articulos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    AddClienteComponent,
    EditClienteComponent,
    AddTiendaComponent,
    TiendaListComponent,
    EditTiendaComponent,
    EditArticulosComponent,
    AddArticulosComponent,
    ArticulosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
