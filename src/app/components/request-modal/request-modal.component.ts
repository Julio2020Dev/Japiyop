import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
  public requestData: any = {};
  constructor(
    public activatedRoute : ActivatedRoute,
    public router: Router,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.requestData = {
      jobTitle: '',
      industy: '',
      
    }
  }
  userProfile(){
    this.navCtrl.navigateForward('profile');
  }
  sendRequest(){

  }
  async closeModalWithProfile() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss();
  }
  async closeModalWithRequest(){

  }
}
