import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-request-proposal',
  templateUrl: './request-proposal.page.html',
  styleUrls: ['./request-proposal.page.scss'],
})
export class RequestProposalPage implements OnInit {

  public initPrice: any;
  public finalPrice: any;
  constructor(
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }
  
  back(){
    this.navCtrl.back();
  }
  accept(){
    this.navCtrl.navigateForward("accept-contract");
  }
}
