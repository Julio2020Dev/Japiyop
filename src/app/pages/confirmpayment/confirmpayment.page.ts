import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-confirmpayment',
  templateUrl: './confirmpayment.page.html',
  styleUrls: ['./confirmpayment.page.scss'],
})
export class ConfirmpaymentPage implements OnInit {

  public username: any;
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.username = "Alberto Job Hunter";
  }
  back(){
    this.navCtrl.back();
  }
  confirmPayment(){
    
  }
}
