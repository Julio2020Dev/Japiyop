import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

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
