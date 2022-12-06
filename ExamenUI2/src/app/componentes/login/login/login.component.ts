import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cons } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = "";
  apellido: string = "";
  showMessage: boolean = false;

  constructor(private route: ActivatedRoute,
    private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    localStorage.clear();
  }

  login() {
    this.loginService.loginCliente(this.nombre, this.apellido)
    .subscribe({
        next: (Response) => { 
          localStorage.setItem("nombre",this.nombre);
          localStorage.setItem("apellido",this.apellido);
          this.router.navigate(['carrito']); 
        },
        error: (Response) => { 
          console.log(Response); 
          this.showMessage = true;
        }
      });
  }

}
