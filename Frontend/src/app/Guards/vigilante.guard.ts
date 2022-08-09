import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private router: Router){

  }
  decodeJWT(token:string){
    try{
      return jwt_decode(token)
    }catch(error){
      return null
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(!localStorage.getItem('_id') || !localStorage.getItem('jwt')){
        this.router.navigate(['/'])
        return false;
      }else{
        const djwt:any = this.decodeJWT(localStorage.getItem('jwt'));
        if(djwt.tipoUsuario != "Admin"){
          return true
        }else{
          this.router.navigate(['/'])
          return false
        }
      }
  }
  
}
