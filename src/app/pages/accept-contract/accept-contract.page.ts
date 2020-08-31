import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-accept-contract',
  templateUrl: './accept-contract.page.html',
  styleUrls: ['./accept-contract.page.scss'],
})
export class AcceptContractPage implements OnInit {

  private readCondition: boolean;
  private acceptCondition: boolean;

  userAccept: boolean;

  contactDetails: any;
  constructor(
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.contactDetails = "Lorem ipsum  lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ;
    this.readCondition = false;
    this.acceptCondition = false;
    this.userAccept = true;
  }
  back(){
    this.navCtrl.back();
  }
  accept(){

  }

  follow(){
    this.navCtrl.navigateForward('payment');
  }
}
