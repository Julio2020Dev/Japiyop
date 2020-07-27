import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserOptions } from '../../interfaces/user-options';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  signup: UserOptions = { username: '', phonenumber: '', email: '', password: '', dni: '', city: '', district: '' };
  cityList : any[]=[
    { id: 1, name:'Lima Metripolitanan', value:'',enalble:false, color:'dark', fill:"outline"},
    { id: 2, name:'Lima Metripolitanansfdsf', value:'',enalble:false, color:'dark', fill:"outline"},
     
  ];
  districtList : any[]=[
    { id: 1, name:'San Borja', value:'',enalble:false, color:'dark', fill:"outline"},
    { id: 2, name:'San', value:'',enalble:false, color:'dark', fill:"outline"},
     
  ];
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }
   
   
  ngOnInit() {
    
  }
  onSignup(form: NgForm) {
    this.submitted = true;
    console.log('Form Submitted!');
    if (form.valid) {
      // this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/home');
    }
  }
}
