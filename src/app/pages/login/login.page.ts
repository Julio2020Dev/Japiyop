import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public dataReturned:any;
  public loading: any;
  public isGoogleLogin = false;
  public user : any;

  constructor(
    public router: Router,
    public modalController: ModalController,
    private google: GooglePlus,
    private fb: Facebook,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private platform: Platform,
  ) { }

  ngOnInit() {
  }
  onSignWithGoogle(){
    //  this.showModal();
    this.googleLogin();
  }
  onSignWithLinkedIn(){
    this.twLogin()
  }
  onSignWithFacebook(){
    this.fbLogin();
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
  onTermAndConditions(){

  }
  //--------------------------------------------------------------------
  //--------GOOGLE LOGIN PART--------
  googleLogin(){
    let params: any;
    let self = this;
    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        params = {
          webClientId: '560375271294-taqj1flmoi806kstrb4ksrgaojl33jt9.apps.googleusercontent.com', //  webclientID 'string'
          offline: true
        };
      } else {
        params = {};
      }
      this.google.login(params)
      .then((response) => {
        const { idToken, accessToken } = response;
        self.onGoogleLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error);
        alert('error:' + JSON.stringify(error));
      });
    } else{
      this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(success => {
        console.log('success in google login', success.user);
        self.isGoogleLogin = true;
        self.user =  success.user;
        console.log('success in google login', self.user);
        self.router.navigateByUrl('confirm-profile',{queryParams: self.user});
      }).catch(err => {
        console.log(err.message, 'error in google login');
      });
    }
  }
  onGoogleLoginSuccess(accessToken:any, accessSecret:any) {
    let self = this;
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((success) => {
        self.isGoogleLogin = true;
        self.user =  success.user;
        self.router.navigateByUrl('confirm-profile',{queryParams: self.user});
        self.loading.dismiss();
      });

  }
  //--------------------------------------------------------------------
  //--------GOOGLE LOGIN PART--------
  fbLogin(){
    this.fb.login(['email'])
    .then((response: FacebookLoginResponse) => {
      this.onFbLoginSuccess(response);
      console.log(response.authResponse.accessToken);
    }).catch((error) => {
      console.log(error);
      alert('error:' + error);
    });
  }
  onFbLoginSuccess(res: FacebookLoginResponse) {
    // const { token, secret } = res;
    let self = this;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((response) => {
        self.router.navigateByUrl('confirm-profile',{queryParams: response});
      });

  }
  //--------------------------------------------------------------------
  //--------GOOGLE LOGIN PART--------
  twLogin(){

  }
}
