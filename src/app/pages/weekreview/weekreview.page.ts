import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-weekreview',
  templateUrl: './weekreview.page.html',
  styleUrls: ['./weekreview.page.scss'],
})
export class WeekreviewPage implements OnInit {

  public projectList: any = [];
  public project: any;
  constructor(
    public activatedRoute : ActivatedRoute,
    public router: Router,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController){

    }
  ngOnInit() {
    this.projectList = [
      {id:0, title:'Si'},
      {id:1, title:'No'},
      {id:2, title:'Si'}
    ];
  }
  sendReviews(){
    console.log('WEEKLYREVIEWS>PAGE>>>> SEND BUTTON!');
    this.navCtrl.back();
  }

}
