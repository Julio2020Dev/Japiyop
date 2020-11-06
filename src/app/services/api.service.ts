import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; 
import 'firebase/firestore';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loader: boolean = false;
  user: any;
  admin: boolean = false;
  headers = new HttpHeaders();
  url = 'https://japiyopwebapp.uc.r.appspot.com/rest/';
  constructor(
    private router: Router,
    private AFauth: AngularFireAuth,
    public db:      AngularFirestore,
    private _http:  HttpClient,
  ) {
     
   }

  configApp() {
     
  }
  sendMsg(cId: string, toId: string, msg: string, type: string) {
    let key = this.generateRandomString(16);
    this.db.collection("chatRoom/").doc(key).set({
          type: type,
          cId: cId,
          toId: toId,
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

  // Define HttpHeaders
  getHeader() {

    let headers:HttpHeaders;
	  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Basic ' + btoa('japiyop:j@p1y0p2020')).set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS").set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
		return headers;
  }
  //------------------------------------------------------------------------------------------
  // APPPLCANT PART
  //------------------------------------------------------------------------------------------
    get(endpoint:string):Observable<any>  {
      return this._http.get(this.url + endpoint, { headers: this.getHeader(), observe: 'response' });
    }
    post(endpoint:string, data:any):Observable<any> {
      return this._http.post(this.url + endpoint , {data: data},{ headers: this.getHeader(), observe: 'response' });
    }
    getFromId(endpoint:string):Observable<any> {
      return this._http.get(this.url + endpoint, { headers: this.getHeader(), observe: 'response' });
    }
    update(endpoint:string, data:any):Observable<any> {
      return this._http.put(this.url + endpoint, {data: data},{ headers: this.getHeader(), observe: 'response' });
    }
    remove(endpoint:string ):Observable<any> {
      return this._http.delete(this.url + endpoint, { headers: this.getHeader(), observe: 'response' });
    }

   
}
