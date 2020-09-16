import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
        localStorage.setItem("email", res.user.email)
      }).catch(err => alert('datos incorrectos'))
    })
  }

  register(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
        resolve(res)
        localStorage.setItem("email", res.user.email)
      }).catch(err => alert('datos incorrectos'))
    })
  }

  recuperarPassword(email: string) {
    return this.AFauth.sendPasswordResetEmail(email).then(function () {
    }).catch(err => console.log(err))
  }

}
