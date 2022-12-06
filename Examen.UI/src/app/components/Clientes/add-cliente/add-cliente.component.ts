import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modulos/cliente.module';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {

  nuevoCliente : Cliente = { id: '', nombre: '', apellido: '', direccion: '', id_articulo: '' };

  constructor(private clienteServices: ClientesService, private router: Router ) {}

  ngOnInit(): void {

  }

  agregarNuevoCliente() {
    this.clienteServices.addCliente(this.nuevoCliente)
    .subscribe({
      next: (Cliente) => { this.router.navigate(['clientes']); }
    });
    
  }

}
