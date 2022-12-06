import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login/login.component';
import { CarritoComponent } from './componentes/carrito/carrito/carrito.component';
import { CarritoCompraComponent } from './componentes/carrito-compra/carrito-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarritoComponent,
    CarritoCompraComponent
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
