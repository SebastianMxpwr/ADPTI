import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
declare var iziToast: any


@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  id: string
  libro = {
    existencias: 0,
    descripcion: '',
    nombreLibro: '',
    
  }
  constructor(private aRouter: ActivatedRoute, public libroS: BookService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerBookId()
  }

  obtenerBookId(){
    this.aRouter.params.subscribe(params=>{
      this.id = params['id']
      this.libroS.getBookId(this.id).subscribe((res:any)=>{
        this.libro = res.cont        
      },error=>{
        console.error(error);
        
      })
    })
  }

  actualizarBook(data){
    this.libroS.editBook(this.id, this.libro).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/boss/libros'])
      iziToast.success({
        title: 'Actualizado',
        message: 'Libro Actualizado',
    });
    },err=>{
      console.error(err);
      
    })
  }

}
