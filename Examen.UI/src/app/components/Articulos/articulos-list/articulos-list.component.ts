import { Component } from '@angular/core';
import { Articulos } from 'src/app/Modulos/articulos.module';
import { ArticulosService } from 'src/app/servicios/articulos.service';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.css']
})
export class ArticulosListComponent {

  articulos: Articulos[] = [];

  constructor(private articuloService: ArticulosService){}

  ngOnInit(): void {
    this.articuloService.getAllArticulos()
    .subscribe({
      next: (Articulos) => { this.articulos = Articulos },
      error: (Response) => { console.log(Response) }
    });
  }

}
