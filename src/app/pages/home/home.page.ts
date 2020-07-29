import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showSearch: boolean;
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) { 
    this.showSearch = false;
  }

  ngOnInit() {
  }
  //-- Goto Profile Page
  profile(){
    this.navCtrl.navigateForward('profile');
  }
  //-- Goto Filter Page
  filter(){
    this.navCtrl.navigateForward('/filter');
  }
  //-- Show Search Field
  searchJob(){
    this.showSearch = !this.showSearch;
  }

}
