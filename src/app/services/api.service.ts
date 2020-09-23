import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { SnackbarService } from '../services/snackbar.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; 
import 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loader: boolean = false;
  user: any;
  admin: boolean = false;

  constructor(
    // private snack: SnackbarService,
    private router: Router,
    private AFauth: AngularFireAuth,
    public db:      AngularFirestore
  ) {
    
   }

   configApp() {
     
  }
  sendMsg(id: string, msg: string, type: string) {
    let key = this.generateRandomString(16);
    this.db.collection("chatRoom/").doc(key).set({
          type: type,
          id: id,
          key: key,
          msg: msg,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    
  }
  generateRandomString(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}
