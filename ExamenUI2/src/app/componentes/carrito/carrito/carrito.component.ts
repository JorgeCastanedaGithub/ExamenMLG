import { Component } from '@angular/core';
import { Articulos } from 'src/app/Modulos/articulos.modelu';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  
  articulos: Articulos[] = [];

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.loginService.getAllArticulos()
    .subscribe({
      next: (Articulos) => { this.articulos = Articulos },
      error: (Response) => { console.log(Response) }
    });
  }

}
