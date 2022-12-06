import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulos } from 'src/app/Modulos/articulos.module';
import { ArticulosService } from 'src/app/servicios/articulos.service';
import { Tienda } from 'src/app/Modulos/tienda.module';
import { TiendaService } from 'src/app/servicios/tienda.service';
import { enviroment } from 'src/environments/environments';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-articulos',
  templateUrl: './add-articulos.component.html',
  styleUrls: ['./add-articulos.component.css']
})
export class AddArticulosComponent {

  imageUrl: string = enviroment.imageUrl;
  tiendas: Tienda[] = [];
  nuevoArticulo : Articulos = { id:'', codigo: '', descripcion: '', precio: 0, stock: 0, fecha: new Date(), id_tienda: '' };
  selected: string = "";
  idTienda: string = "";

  constructor(private articuloServices: ArticulosService, private router: Router,
              private tiendaService: TiendaService) {}

  ngOnInit(): void {
    this.tiendaService.getAllTiendas()
    .subscribe({
      next: (Tienda) => { this.tiendas = Tienda; },
      error: (Response) => { console.log(Response); }
    });
  }

  agregarNuevoArticulo() {
    const tienda = this.tiendas.find(t => t.sucursal == this.selected);
    this.idTienda = tienda?.id || "";
    this.nuevoArticulo.id_tienda = this.idTienda;
    this.articuloServices.addArticulo(this.nuevoArticulo)
    .subscribe({
      next: (Articulos) => { this.router.navigate(['articulos']); }
    });
  }

}
