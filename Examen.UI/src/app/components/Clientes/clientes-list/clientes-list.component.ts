import { Component } from '@angular/core';
import { Cliente } from 'src/app/Modulos/cliente.module';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent {

  Clientes: Cliente[] = [];

  constructor(private clientesServices: ClientesService  ) {}

  ngOnInit(): void {

    this.clientesServices.getAllClientes()
    .subscribe({

      next: (Clientes) => {
        this.Clientes = Clientes;
        
      },
      error: (Response) => {
        console.log(Response);
      }
    });

  }

}
