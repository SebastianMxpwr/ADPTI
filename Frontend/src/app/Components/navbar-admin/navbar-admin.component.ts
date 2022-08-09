import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
}
}
