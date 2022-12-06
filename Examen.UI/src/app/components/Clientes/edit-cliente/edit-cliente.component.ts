import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Modulos/cliente.module';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent {

  detallescliente: Cliente = { 
    id: '', nombre: '', apellido: '', direccion: '', id_articulo: '' 
  };

  constructor (private route: ActivatedRoute,
     private clienteService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.clienteService.getCliente(id)
          .subscribe({
            next: (response) => { this.detallescliente = response; }
          });
        }
      }
    });
  }

  updateCliente() {
    this.clienteService.updateCliente(this.detallescliente.id, this.detallescliente)
    .subscribe({
      next: (Response) => { this.router.navigate(['clientes']); }
    });
  }

  deleteCliente(id: string) {
    this.clienteService.deleteCliente(id)
    .subscribe({
      next: (response) => { this.router.navigate(['clientes']); }
    });
  }

}
