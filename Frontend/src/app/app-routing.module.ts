import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { WorkerComponent } from './Components/workerComponents/worker/worker.component';
import { FormEmpleadoComponent  } from "./Components/bossComponents/form-empleado/form-empleado.component";
import { VigilanteGuard } from './Guards/vigilante.guard';
import { MostrarEmpleadosComponent } from './Components/bossComponents/mostrar-empleados/mostrar-empleados.component';
import { EditarEmpleadoComponent } from './Components/bossComponents/editar-empleado/editar-empleado.component';
import { MostrarLibrosComponent } from './Components/bossComponents/mostrar-libros/mostrar-libros.component';
import { EditarLibroComponent } from './Components/bossComponents/editar-libro/editar-libro.component';
import { AnadirLibroComponent } from './Components/workerComponents/anadir-libro/anadir-libro.component';
import { FormLibroComponent } from './Components/bossComponents/form-libro/form-libro.component';
import { VenderLibroComponent } from './Components/workerComponents/vender-libro/vender-libro.component';
import { VigilanteAdminGuard } from './Guards/vigilante-admin.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  
  {path: 'boss/trabajadores', component: MostrarEmpleadosComponent, canActivate:[VigilanteAdminGuard]},
  {path: 'boss/trabajadores/editar/:id', component: EditarEmpleadoComponent, canActivate:[VigilanteAdminGuard]},
  {path: 'boss/forme', component: FormEmpleadoComponent, canActivate:[VigilanteAdminGuard]},
  
  {path: 'boss/libros', component: MostrarLibrosComponent, canActivate:[VigilanteAdminGuard]},
  {path: 'boss/libro/formt', component: FormLibroComponent, canActivate:[VigilanteAdminGuard]},
  {path: 'boss/libro/editar/:id', component: EditarLibroComponent, canActivate:[VigilanteAdminGuard]},

  {path: 'worker', component: WorkerComponent,canActivate:[VigilanteGuard]},
  {path: 'worker/libro/formt', component: AnadirLibroComponent, canActivate:[VigilanteGuard]},
  {path: 'worker/libro/vender/:id', component: VenderLibroComponent, canActivate:[VigilanteGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
