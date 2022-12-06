import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tienda } from 'src/app/Modulos/tienda.module';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-add-tienda',
  templateUrl: './add-tienda.component.html',
  styleUrls: ['./add-tienda.component.css']
})
export class AddTiendaComponent {

  nuevaTienda : Tienda = { id: '', sucursal: '', direccion: '' };

  constructor(private tiendaService: TiendaService, private router: Router ) {}

  ngOnInit(): void {

  }

  agregarNuevaTienda() {
    this.tiendaService.addTienda(this.nuevaTienda)
    .subscribe({
      next: (Tienda) => { this.router.navigate(['tienda']); }
    });

  }

}
