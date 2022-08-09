import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = 'http://127.0.0.1:3000/api'
  constructor(private http: HttpClient) { }

  getBookId(id:string){
    return this.http.get(`${this.url}/obter_libro/${id}`)
  }

  addBook(nombreLibro:string, descripcion:string, existencias:string, precio:string, photo :File){
    const fd = new FormData()
    fd.append('nombreLibro', nombreLibro)
    fd.append('descripcion', descripcion)
    fd.append('existencias', existencias)
    fd.append('precio', precio)
    fd.append('image', photo)    
    return this.http.post(`${this.url}/registrar_libro`, fd)
  }

  getAllBook(){
    return this.http.get(`${this.url}/obter_libros`)
  }

  searchBooks(nombre:string){
    return this.http.get(`${this.url}/buscar/?name=${nombre}`)
  }

  editBook(id:string, body:any){
    return this.http.put(`${this.url}/editar_libro/${id}`, body)
  }

  sellBook(id:string, id2:string){
    return this.http.get(`${this.url}/vender_libro/${id}/${id2}`)
  }

  deleteBook(id: string){
    return this.http.delete(`${this.url}/eliminar_libro/${id}`)
  }
}
