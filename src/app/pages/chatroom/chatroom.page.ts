import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { UserData } from '../../providers/user-data';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { CommentModalComponent } from '../../components/comment-modal/comment-modal.component';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  @ViewChild('IonContent', { static: false }) content: IonContent
  
  public user: any;
    
  userPhoto: any;
  cUserId:   any;
  cUserName: any;
  cUserType: any;
  toUserId: any;
  start_typing: any;
  loader: boolean;

  unsubscribe: any;
  msgList: any = [];
  chatKeys: any = [];
  userType: string;

  paramData: any;
  user_input: string = "";
  User: string = "Me";
  toUser: string = "HealthBot";
   

  constructor(
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private userData: UserData,
    private callNumber: CallNumber,
    private api: ApiService,
    private userService: UserService
  ) { 
        this.activatedRoute.queryParams.subscribe((res)=>{
          this.user = res;
          this.paramData = res;
          this.toUserId = this.user.id;
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
      console.log('Get User ID', res);
      if(res){
        this.userService.getApplicant(res).subscribe(response=>{
          this.userPhoto = response.photo;
        }),error=>{
          console.log("Error Getting UserInfo", error);
        }
      }
    });

    this.userData.getUserType().then(res=>{
      this.userType = res;
    });
  }
  back(){
    this.navCtrl.back();
  }
  call(){
    this.callNumber.callNumber(this.user.mobile_phone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
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
    let msgAllList = [];
    this.unsubscribe = this.api.db.collection("chatRoom"), ref => ref.where("toId", "==", this.user.id) 
    .onSnapshot((querySnapshot)=> {
        this.loader = false;
        querySnapshot.forEach((doc)=> {
            let data = doc.data();
            if(this.chatKeys.indexOf(data.key) < 0){
              msgAllList.push(data);
              this.chatKeys.push(data.key);
            }
            console.log(doc.data());
        });
        if(msgAllList.length > 0){
          for(let i=0; i<msgAllList.length;i++){
            let msgData = msgAllList[i];
            if(msgData.cId == this.cUserId){
              this.msgList.push(msgData);
            }
          }
        }
        this.msgList.sort(this.sortDate);
    });
  }
  sendMsg() {
    if (this.user_input !== '') {
      let key = this.generateRandomString(16);
      this.msgList.push({
        cId: this.cUserId,
        toId: this.toUserId,
        key:key,
        timestamp: "12:01",
        msg: this.user_input,
        type: this.userType
      });
      if(this.user_input){
        this.api.sendMsg(this.cUserId,this.toUserId, this.user_input, this.userType);
      }
      this.user_input = "";
      this.scrollDown()
      // setTimeout(() => {
      //   this.senderSends()
      // }, 500);

    }
  }
  senderSends() {
    this.loader = true;
    let key = this.generateRandomString(16);
    setTimeout(() => {
      this.msgList.push({
        cId: this.toUserId,
        toId: this.cUserId,
        key:key,
        timestamp: "12:01",
        msg: 'Pagas, this themes support but ionic 3 ionic 4, etc..',
        type: this.user.userType
      });
      this.loader = false;
      this.scrollDown()
    }, 2000)
    this.scrollDown()
  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 50);
  }

  userTyping(event: any) {
    this.start_typing = event.target.value;
    this.scrollDown()
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
  generateRandomString(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
