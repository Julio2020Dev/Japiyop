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
      available: '',
      available_date: '',
      remuner: '',
      maxValue: '',
      minValue: ''
      
    }
  }
  userProfile(){
    console.log('REQUEST_COMPONENT>>>> USER PROFILE BUTTON CLICKED!');
    this.closeModalWithProfile();
    
  }
  sendRequest(){
    console.log('REQUEST_COMPONENT>>>> SEND REQUEST BUTTON CLICKED!');
    this.closeModalWithRequest();
  }
  async closeModalWithProfile() {
    const onClosedData: string = "Wrapped Up!";
    this.requestData = null;
    await this.modalCtrl.dismiss(this.requestData);
  }
  async closeModalWithRequest(){
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(this.requestData);
  }
}
