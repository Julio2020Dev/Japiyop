import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  
  userName:     any;
  phoneNumber:  any;
  email:        any;
  DNI:          any;
  password:     any;
  birthday:     any;
  city:         any;
  district:     any;

  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.back();
  }
  savePerson(){

  }
}
