import { Component } from '@angular/core';
import { Tienda } from 'src/app/Modulos/tienda.module';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-tienda-list',
  templateUrl: './tienda-list.component.html',
  styleUrls: ['./tienda-list.component.css']
})
export class TiendaListComponent {

  tienda: Tienda[] = [];

  constructor(private tiendaService: TiendaService) {}

  ngOnInit() : void {

    this.tiendaService.getAllTiendas()
    .subscribe({
      next: (Tienda) => { this.tienda = Tienda; },
      error: (Response) => { console.log(Response); }
    });
  }

}
