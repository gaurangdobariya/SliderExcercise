import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(private authService : AuthService,private route : Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if(this.authService.isLoggednIn()){
        // this.route.navigate(["dashboard"]);
        return true;
      }else{
        this.route.navigate(["login"]);
        return false;
      }
  }
}
