import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

declare var iziToast: any

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {

  photoSelected: string | ArrayBuffer | undefined;
  file: File;


  constructor(public router: Router, public libroS: BookService) { 
    
  }

  ngOnInit(): void {
  }

  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      console.log(this.file);
      
      // image preview
      const reader = new FileReader();
      reader.onload = (e) => this.photoSelected = reader.result as string;
      reader.readAsDataURL(this.file);
    }
  }

  book_Component(nombre:HTMLInputElement, descripcion:HTMLInputElement, existencias:HTMLInputElement, precio:HTMLInputElement){
    if(nombre){
      this.libroS.addBook(nombre.value, descripcion.value, existencias.value, precio.value, this.file).subscribe((res: any)=>{
        console.log(descripcion.value);
        iziToast.success({
          title: 'Exito registrar',
          message: `Se registro el libro`,
          position: 'bottomLeft'
        });
        
      },error => {
        iziToast.error({
          title: 'Error',
          message: error.error.msg,
          position: 'bottomLeft'
        });
        
      })  
      
    }
    
  }

}
