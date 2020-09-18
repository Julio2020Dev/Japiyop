import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
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
  public user = {id:'', first_name:'', last_name:'', mobile_phone:'', email:'', photo:'', userType:''};

  constructor(
    public router: Router,
    public modalController: ModalController,
    public navCtrl: NavController,
    private google: GooglePlus,
    private fb: Facebook,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private platform: Platform,
  ) { }

  ngOnInit() {
  }
  onSignWithGoogle(){
    this.googleLogin();
  }
  onSignWithLinkedIn(){
    this.linkedInLogin()
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
        let userName = success.user.displayName;
        let splitted = userName.split(' ',2);
        self.user = {
          id:success.user.uid, first_name:splitted[0], last_name:splitted[1], mobile_phone:success.user.phoneNumber, email:success.user.email, photo:success.user.photoURL, userType:''
        };
        console.log('success in google login', self.user);
        self.navCtrl.navigateForward('confirm-profile',{queryParams: self.user});
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
        let userName = success.user.displayName;
        let splitted = userName.split(' ',2);
        self.user = {
          id:success.user.uid, first_name:splitted[0], last_name:splitted[1], mobile_phone:success.user.phoneNumber, email:success.user.email, photo:success.user.photoURL, userType:''
        };
        self.navCtrl.navigateForward('confirm-profile',{queryParams: self.user});
        self.loading.dismiss();
      });

  }
  //--------------------------------------------------------------------
  //--------FACEBOOK LOGIN PART--------
  fbLogin(){
    let self = this;
    if(this.platform.is('cordova')){
      this.fb.login(['email']).then((response: FacebookLoginResponse) => {
        this.onFbLoginSuccess(response);
        console.log(response.authResponse.accessToken);
      }).catch((error) => {
        console.log(error);
        alert('facebook login error:' + error);
      });
    }else{
      this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(success=>{
        console.log('success in facbook login', success);
        self.router.navigateByUrl('confirm-profile',{queryParams: success});
      }).catch(err => {
        console.log(err.message, 'error in facebook login');
      });
    }
    
  }
  onFbLoginSuccess(res: FacebookLoginResponse) {
    // const { token, secret } = res;
    let self = this;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.signInWithCredential(credential).then((response) => {
        alert('fb success:'+response);
        self.router.navigateByUrl('confirm-profile',{queryParams: response});
    });

  }
  //--------------------------------------------------------------------
  //--------LINKEDIN LOGIN PART--------
  linkedInLogin(){

  }
}
