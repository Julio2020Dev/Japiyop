import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { AngularFireAuth } from '@angular/fire/auth'
import { map } from 'rxjs/operators'
import { isNullOrUndefined } from 'util'
import { NavController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AFauth: AngularFireAuth, private navCtrl: NavController){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.AFauth.authState.pipe(map( auth => {
        if(isNullOrUndefined(auth)){
          this.navCtrl.navigateForward('/portada')
          return false
        }else{
          localStorage.setItem('email', auth.email)
          return true
        }
      }))
    }
  
}
