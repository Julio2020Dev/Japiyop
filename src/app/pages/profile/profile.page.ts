import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
}
