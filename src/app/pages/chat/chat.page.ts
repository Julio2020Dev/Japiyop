import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController,  NavController, ToastController, IonContent } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { HunterService } from '../../services/hunter.service';
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
    private huterService: HunterService
  ) {
    
     
   }

  ngOnInit() {
    this.getHunters();
  }
  getHunters(){
    this.huterService.getJobHunters().subscribe(res=>{
      this.hunterList = res;
    })
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
