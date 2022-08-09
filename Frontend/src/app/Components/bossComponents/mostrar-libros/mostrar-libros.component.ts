import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
declare var iziToast: any


@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.component.html',
  styleUrls: ['./mostrar-libros.component.css']
})
export class MostrarLibrosComponent implements OnInit {


  libros = []
  constructor(public libroS: BookService, public router: Router) { }

  ngOnInit(): void {
    this.getAllBookC()
  }

  getAllBookC(){
    this.libroS.getAllBook().subscribe((res: any) => {
      this.libros = res.cont
      console.log(this.libros);
      
    },error=>{
      console.error(error);
    })
  }

  editBookC(id: string){
    this.router.navigate(['/boss/libro/editar/', id])
  }

  deleteBookC(id: string){
    iziToast.question({
      timeout: 20000,
      close: false,
      overlay: true,
      backgroundColor: 'rgb(240, 86, 86)',
      displayMode: 'once',
      id: 'question',
      zindex: 999,
      title: 'Oye!!',
      message: 'Estas seguro de borrarlo',
      position: 'center',
      buttons: [
          ['<button><b>SI</b></button>',  (instance, toast) => {
   
            this.libroS.deleteBook(id).subscribe((res:any)=>{
              this.getAllBookC()
              iziToast.success({
                title: 'OK',
                message: 'Exito al borrar el libro',
            });
            }, err=>{
              console.error(err);
            })
          
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
   
          }, true],
          ['<button><b>NO</b></button>', (instance, toast)=> {
   
              instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
   
          }],
      ],
  });
  }

}
