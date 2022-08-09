import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
declare var iziToast: any

@Component({
  selector: 'app-vender-libro',
  templateUrl: './vender-libro.component.html',
  styleUrls: ['./vender-libro.component.css']
})
export class VenderLibroComponent implements OnInit {

  id: string
  id2: string
  libro = {
    descripcion: '',
    existencias: 0,
    imagePath: '',
    nombreLibro: '',
    precio: ''
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
        console.log(this.libro);
               
      },error=>{
        console.error(error);
        
      })
    })
  }

  venderBook(data){
    this.aRouter.params.subscribe(params=>{
      this.id = params['id']
      this.id2 = localStorage.getItem('_id')
      this.libroS.sellBook(this.id, this.id2).subscribe((res:any)=>{
        console.log(res);
        this.router.navigate(['/worker'])
        iziToast.success({
          title: 'Vendido',
          message: 'Libro Vendido',
      });
      },err=>{
        console.error(err);
        
      })
    })
  }

  cancelar(){
    this.router.navigate(['/worker'])
  }

}
