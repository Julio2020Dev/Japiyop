import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
import { CommentModalComponent } from '../../components/comment-modal/comment-modal.component';
@Component({
  selector: 'app-hunter-details',
  templateUrl: './hunter-details.page.html',
  styleUrls: ['./hunter-details.page.scss'],
})
export class HunterDetailsPage implements OnInit {
  public job:       any;
  public expList:   any =[];
  public userList:  any = [];
  dataReturned:     any;
  showInformation:  boolean;
  moreCount:        number;
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
      this.job = res;
      console.log('HUNTERDETAILS.TS====HUNTER DATA',res);
     
    });
    this.showInformation = false;
    //-----Template Datas
    this.userList = [
      {id:0, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_00.png', review:6},
      {id:1, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_01.png', review:4},
      {id:2, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_02.png', review:5},
      {id:3, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_00.png', review:4},
      {id:4, name:"", type:'Juan P., Administrador', detail:'Lorem ipsum dolor sit amet', avatar:'assets/img/avatar_01.png', review:3},
    ];
    this.moreCount = this.userList.length - 4;
  }

  ngOnInit() {
    for(let i =0; i< 9;i++){
      let strExp = "Exp";
      let strIndex = i+1;
      let item = {
        id:i, label: strExp + strIndex
      }
      this.expList.push(item);
    }
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.showInformation = !this.showInformation;
    
  }
  back(){
    this.navCtrl.back();
  }
  favo(){
    console.log('HUNTER_DETAILS.PAG>>>> FAVORITY ICON CLICKED!');
  }
  share(){
    console.log('HUNTER_DETAILS.PAG>>>> SHARING ICON CLICKED!');
  }
  contact(){
    console.log('HUNTER_DETAILS.PAG>>>> CONTACT BUTTON CLICKED!');
    this.navCtrl.navigateForward('request');
  }
  expetLevel(item:any){
    console.log('HUNTER_DETAILS.PAG>>>> EXP BUTTON CLICKED!', item);
  }

  comment(){
    this.showModal();
  }
   
  async showModal(){
    const modal = await this.modalCtrl.create({
      component: CommentModalComponent,
      cssClass: 'commentModal',
      componentProps: {
        'name': 'Hello User'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Returned Data', this.dataReturned);
      }else{
      }
      this.navCtrl.navigateForward('reviews');
    });
    return await modal.present();
  }
  

}
