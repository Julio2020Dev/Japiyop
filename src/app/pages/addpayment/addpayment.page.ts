import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.page.html',
  styleUrls: ['./addpayment.page.scss'],
})
export class AddpaymentPage implements OnInit {
  public card = {
    name: '',
    number: '',
    year:'',
    month:'',
    cvv:''
  }
  public frequence: boolean;

  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.frequence = false;
  }
  back(){
    this.navCtrl.back();
  }
  add(){
    console.log('ADDPAYMENT.PAGE>>>>>>>ADD BUTTON !');
  }

  
  addPayment(){

  }
}
