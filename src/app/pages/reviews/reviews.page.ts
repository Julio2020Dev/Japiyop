import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  public userList: any = [];
  constructor(
    public activatedRoute : ActivatedRoute,
    public router: Router,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) { 
    //-----Template Datas
    this.userList = [
      {id:0, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_00.png', review:6},
      {id:1, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_01.png', review:4},
      {id:2, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_02.png', review:5},
      {id:3, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_00.png', review:4},
      {id:4, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_01.png', review:3},
    ];
  }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
}
