import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarAdminComponent } from './Components/navbar-admin/navbar-admin.component';
import { NavbarWorkerComponent } from './Components/navbar-worker/navbar-worker.component';
import { EditarLibroComponent } from './Components/bossComponents/editar-libro/editar-libro.component';
import { EditarEmpleadoComponent } from './Components/bossComponents/editar-empleado/editar-empleado.component';
import { FormEmpleadoComponent } from './Components/bossComponents/form-empleado/form-empleado.component';
import { FormLibroComponent } from './Components/bossComponents/form-libro/form-libro.component';
import { MostrarEmpleadosComponent } from './Components/bossComponents/mostrar-empleados/mostrar-empleados.component';
import { MostrarLibrosComponent } from './Components/bossComponents/mostrar-libros/mostrar-libros.component';
import { WorkerComponent } from './Components/workerComponents/worker/worker.component';
import { AnadirLibroComponent } from './Components/workerComponents/anadir-libro/anadir-libro.component';
import { VenderLibroComponent } from './Components/workerComponents/vender-libro/vender-libro.component';
import { VenderLibroAComponent } from "./Components/bossComponents/vender-libro-a/vender-libro-a.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarAdminComponent,
    NavbarWorkerComponent,
    EditarLibroComponent,
    EditarEmpleadoComponent,
    FormEmpleadoComponent,
    FormLibroComponent,
    MostrarEmpleadosComponent,
    MostrarLibrosComponent,
    WorkerComponent,
    AnadirLibroComponent,
    VenderLibroComponent,
    VenderLibroAComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
