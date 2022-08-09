import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
declare var iziToast: any

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  search:string = ""
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

  venderBookC(id: string){
    this.router.navigate(['/worker/libro/vender/', id])
  }

  searchBookC(){
    this.libroS.searchBooks(this.search).subscribe((res:any)=>{
      this.libros = res.libro
      console.log(this.libroS)
    },error=>{
      console.error(error);
      
    })
  }
}
