import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
import { CommentModalComponent } from '../../components/comment-modal/comment-modal.component';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  public hunter: any;
  public textData: any;
  constructor(
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.hunter = res;
      console.log('CHATROOM.TS====HUNTER DATA',res);    
    });
   }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
  call(){
    
  }
  more(){
    this.showModal();
  }
  takeFile(){

  }
  sendMessage(){

  }


  async showModal(){
    const modal = await this.modalCtrl.create({
      component: CommentModalComponent,
      cssClass: 'securityModal',
      componentProps: {
        'type': 'security',
        'name': this.hunter.author
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
       console.log('Data Returned', dataReturned);
    });
    return await modal.present();
  }
}
