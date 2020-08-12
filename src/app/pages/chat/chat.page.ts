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
  public hunterList: any = [];
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) {
    
    this.hunterList = [
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
  selectUser(item:any){
    item.type = "chat";
    console.log('CHAT.PAGE>>>>> Select User Clicked!', item);
    this.navCtrl.navigateForward('chatroom', {queryParams: item});
    // this.navCtrl.navigateForward('hunter-details', {queryParams: item});
  }
  filter(){
    console.log('CHAT.PAGE>>>>> FILTER CLICKED!');
  }

}
