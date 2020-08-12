import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-show-me',
  templateUrl: './show-me.page.html',
  styleUrls: ['./show-me.page.scss'],
})
export class ShowMEPage implements OnInit {

  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
}
