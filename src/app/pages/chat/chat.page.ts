import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController,  NavController, ToastController, IonContent } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('recentSlider', { static: false }) slider: IonSlides;
  sliderConfig = {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerColumn: 1,
  }
  public userList: any = [];
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) {
    this.userList = [
      {id:0, name:"", type:'Job Hunter', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_00.png', online:true},
      {id:0, name:"", type:'Job Hunter', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_01.png', online:false},
      {id:0, name:"", type:'Job Hunter', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_02.png', online:false},
      {id:0, name:"", type:'Job Hunter', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_00.png', online:false},
      {id:0, name:"", type:'Job Hunter', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_01.png', online:false},
    ];
   }

  ngOnInit() {
  }
  selectUser(item:any){
    console.log('CHAT.PAGE>>>>> Select User Clicked!', item);
    this.navCtrl.navigateForward('job-request');
  }
  filter(){
    console.log('CHAT.PAGE>>>>> FILTER CLICKED!');
  }

}
