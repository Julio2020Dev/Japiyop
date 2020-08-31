import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController,  NavController, ToastController, AlertController, IonContent } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-hunter-chat',
  templateUrl: './hunter-chat.page.html',
  styleUrls: ['./hunter-chat.page.scss'],
})
export class HunterChatPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('recentSlider', { static: false }) slider: IonSlides;
  
  public userList: any = [];

  sliderConfig = {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerColumn: 1,
  }
  constructor(  
    public navCtrl:  NavController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toast: Toast,
    public router: Router
  ) { 
    this.userList = [
      {id:0, type:'Job Hunter', title: 'Test Job', author: 'Chris Moscoso L', avatar:'assets/img/avatar_00.png', rate:'4.5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:true, online:true},
      {id:1, type:'Job Hunter', title: 'Test Job', author: 'Emperatriz Paucar', avatar:'assets/img/avatar_01.png', rate:'5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false, online:false},
      {id:2, type:'Job Hunter', title: 'Test Job', author: 'Aria Moscoso P', avatar:'assets/img/avatar_02.png', rate:'5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false, online:false},
      {id:0, type:'Job Hunter', title: 'Test Job', author: 'Chris Moscoso L', avatar:'assets/img/avatar_00.png', rate:'4.5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:true, online:true},
      {id:1, type:'Job Hunter', title: 'Test Job', author: 'Emperatriz Paucar', avatar:'assets/img/avatar_01.png', rate:'5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false, online:false},
      {id:2, type:'Job Hunter', title: 'Test Job', author: 'Aria Moscoso P', avatar:'assets/img/avatar_02.png', rate:'5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false, online:false},
      
    ]
  }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
  selectUser(user:any){
    this.navCtrl.navigateForward('/hunterequest');
  }
  filter(){

  }
}
