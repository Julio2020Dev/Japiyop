import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public login: any = {email: '', password: ''};
  submitted = false;
  constructor(
    public router: Router,
    public loadingController: LoadingController,
    public authService: AuthService
       
  ){ 
    this.login = {
      email: '',
      password: ''
    }
  }
  ngOnInit() {
    
  }
  singUp(){
    console.log('LOGIN.PAGE.TS>>>>> SIGN UP');
    this.router.navigateByUrl('sign-home');
  }
  onLogin(form: NgForm){
    this.submitted = true;
    let self = this;
    console.log('Form Submitted!');
    if (form.valid) {
       this.authService.login(self.login.email, self.login.password).then(res=>{
         console.log("Login Success", res);
       }).catch(error=>{
         console.log('Login Error', error);
       })
    }else{
      this.submitted = false;
      console.log('huntererere');
    }
  }
}
