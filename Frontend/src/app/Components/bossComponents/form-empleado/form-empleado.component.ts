import { Component, OnInit } from '@angular/core';
import { WorkerService } from "../../../Services/worker.service";
import { Router } from '@angular/router';

declare var iziToast: any

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  empleado = {
    nombre: '',
    email: '',
    contrasena: '',
    edad: '',
    cargo: '',
    tipoUsuario: ''
  }
  constructor(public router: Router, public workerS: WorkerService) { }

  ngOnInit(): void {
  }

  login_Component(data:any){
    if(data.valid){
      console.log(this.empleado);
      
      this.workerS.postWorker(this.empleado).subscribe((res:any)=>{
        console.log(res.res.nombre);
        
        iziToast.success({
          title: 'Exito registrar',
          message: `Se registro correctamente`,
          position: 'bottomLeft'
        });
        
      }, err=>{
        iziToast.error({
          title: 'Error',
          message: err.error.msg,
        });
      })      
    }else{
      iziToast.error({
        title: 'Error',
        message: 'Datos no validos',
      });;
      
    }
    
  }

}
