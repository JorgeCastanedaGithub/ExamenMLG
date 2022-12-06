import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from 'src/app/Modulos/articulos.modelu';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent {

  nombre: string = localStorage.getItem("nombre") || "";
  apellido: string = localStorage.getItem("apellido") || "";
  detalleArticulo: Articulos = { id:'', codigo:'', descripcion:'', precio:0, //imagen:'', 
                  stock: 0, fecha: new Date(), id_tienda:'' };

  constructor (private route: ActivatedRoute,
    private loginService: LoginService, private router: Router) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
            if (id) {
            this.loginService.getArticulo(id)
            .subscribe({
              next: (response) => { this.detalleArticulo = response; }
            });
          }
        }
      });
    }

    comprarArticulo() {
      this.loginService.compraArticulo(this.detalleArticulo.id, this.detalleArticulo,
                                       this.nombre, this.apellido)
      .subscribe({
        next: (Response) => { 
          this.router.navigate(['carrito']); 
        }, error: (Response) => {
          console.log(Response);
        }
      });
    }
  
    cancelarCompra() {
      this.router.navigate(['carrito']);
    }

}
