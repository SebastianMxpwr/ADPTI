import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  url: string = 'http://127.0.0.1:3000/api'
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.url}/login_empleado`, data)
  }

  getAllWorkers(){
    return this.http.get(`${this.url}/empleados`)
  }

  postWorker(body:any){
    return this.http.post(`${this.url}/registro_empleado`, body)
  }

  getWorkerId(id: string){
    return this.http.get(`${this.url}/empleado/${id}`)
  }

  putWorkerId(body:any, id:string){
    return this.http.put(`${this.url}/editar_empleado/${id}`, body)
  }

  deleteWorkerId(id: string){
    return this.http.delete(`${this.url}/borrar_empleado/${id}`)
  }
}
