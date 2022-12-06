import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'src/app/Modulos/tienda.module';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-edit-tienda',
  templateUrl: './edit-tienda.component.html',
  styleUrls: ['./edit-tienda.component.css']
})
export class EditTiendaComponent {

  detallesTienda: Tienda= { id: '', sucursal: '', direccion: '' };

  constructor(private route: ActivatedRoute,
    private tiendaService: TiendaService, private router: Router) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => { const id = params.get('id'); 
        if(id) {
          this.tiendaService.getTienda(id)
          .subscribe({
            next: (response) => { this.detallesTienda = response; }
          });
        }
      }
      });
    }

    updateTienda() {
      this.tiendaService.updateTienda(this.detallesTienda.id, this.detallesTienda)
      .subscribe({
        next: (response) => { this.router.navigate(['tienda']) }
      });
    }

    deleteTienda(id: string) {
      this.tiendaService.deleteTienda(id)
      .subscribe({
        next: (response) => { this.router.navigate(['tienda']); }
      });
    }

}
