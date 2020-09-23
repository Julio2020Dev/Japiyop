import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserService } from '../../services/user.service';
import { HunterService } from '../../services/hunter.service';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
import { CommentModalComponent } from '../../components/comment-modal/comment-modal.component';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  public user: any;
  public textData: any;
  
  userPhoto: any;
  cUserId:   any;
  cUserName: any;
  cUserType: any;

  chat: string;
  unsubscribe: any;
  messages: any = [];
  chatKeys: any = [];
  userType: string;
  loader: boolean = true;

  constructor(
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private userService: UserService,
    private hunterService: HunterService,
    private userData: UserData,
    private api: ApiService
  ) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.user = res;
      console.log('CHATROOM.TS====HUNTER DATA',res);    
    });
   }

  ngOnInit() {
    this.getUserData();
    this.getChat();
  }
  getUserData(){
    this.userData.getUsername().then(res=>{
      this.cUserName = res;
    });

    this.userData.getUserId().then(res=>{
      this.cUserId = res;
    });

    this.userData.getUserType().then(res=>{
      this.userType = res;
    });
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
  
  async showModal(){
    const modal = await this.modalCtrl.create({
      component: CommentModalComponent,
      cssClass: 'securityModal',
      componentProps: {
        'type': 'security',
        'name': this.user.id
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
       console.log('Data Returned', dataReturned);
    });
    return await modal.present();
  }
  async showPorposalModal(){
    const modal = await this.modalCtrl.create({
      component: CommentModalComponent,
      cssClass: 'securityModal',
      componentProps: {
        'type': 'proposal',
        'name': this.user.id
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
       console.log('Data Returned', dataReturned);
       this.navCtrl.navigateForward('request-proposal');
    });
    return await modal.present();
  }
  proposal(){
    this.showPorposalModal();
  }
  payment(){

  }
  accept(){

  }
  decline(){

  }
  conclud(){

  }
  getChat() {
    console.log('get chat', this.user.id);

    this.unsubscribe = this.api.db.collection("chatRoom"), ref => ref.where("id", "==", this.user.id) 
    .onSnapshot((querySnapshot)=> {
        this.loader = false;
        querySnapshot.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots
            let data = doc.data();
            if(this.chatKeys.indexOf(data.key) < 0){
              this.messages.push(data);
              this.chatKeys.push(data.key);
            }
            console.log(doc.data());
        });
        this.messages.sort(this.sortDate);
    });
  }
  sendMessage(){
    console.log('Send Message!');
    this.chat ? console.log(this.chat) : '';

    if(this.chat){
      this.api.sendMsg(this.cUserId, this.chat, this.userType);
    }

    this.chat = '';
  }
  sortDate(a, b) {  
    var dateA = new Date(a.timestamp.toDate()); 
    var dateB = new Date(b.timestamp.toDate()); 
    return dateA > dateB ? 1 : -1;  
  };
  formatDate(message: any) {
    let date = message['timestamp'] ? message['timestamp'].toDate() : new Date();
    return this.api.formatAMPM(date);
  }
}
