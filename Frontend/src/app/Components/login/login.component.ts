import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WorkerService } from '../../Services/worker.service';
declare var iziToast: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {}
  constructor(public workerS: WorkerService, private router: Router) { }

  ngOnInit(): void {
  }

  login_Component(data: any){
    if(data.valid){
      this.workerS.login(this.user).subscribe((res: any)=>{
        iziToast.success({
          title: 'Exito al logearte',
          message: `Bienvenido ${res.data.nombre}`,
          position: 'bottomLeft'
        });
         localStorage.setItem('_id', res.data._id)
          localStorage.setItem('jwt', res.jwt)
          localStorage.setItem('email', res.data.email)
        if(res.data.tipoUsuario == 'Admin' || res.data.tipoUsuario == 'admin'){         
          this.router.navigate(['/boss/forme'])
        }else{
          this.router.navigate(['/worker'])
        }
      })
    }else{
      
      console.log('estas mal');
    }
    
  }

}
