import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from 'src/app/Modulos/articulos.module';
import { ArticulosService } from 'src/app/servicios/articulos.service';

@Component({
  selector: 'app-edit-articulos',
  templateUrl: './edit-articulos.component.html',
  styleUrls: ['./edit-articulos.component.css']
})
export class EditArticulosComponent {

  tiendas: Tienda[] = [];
  detalleArticulo: Articulos = { id:'', codigo:'', descripcion:'', precio:0, //imagen:'', 
                  stock: 0, fecha: new Date(), id_tienda:'' };
  selected: string = "";
  idTienda: string = "";

  constructor (private route: ActivatedRoute, private articuloService: ArticulosService, 
              private router: Router) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
            if (id) {
            this.articuloService.getArticulo(id)
            .subscribe({
              next: (response) => { this.detalleArticulo = response; }
            });
          }
        }
      });
    }

    updateArticulo() {
      this.articuloService.updateArticulo(this.detalleArticulo.id, this.detalleArticulo)
      .subscribe({
        next: (Response) => { this.router.navigate(['articulos']); }
      });
    }
  
    deleteArticulo(id: string) {
      this.articuloService.deleteArticulo(id)
      .subscribe({
        next: (response) => { this.router.navigate(['articulos']); }
      });
    }

}
