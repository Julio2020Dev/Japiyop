import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, AlertController, IonContent } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hunterequest',
  templateUrl: './hunterequest.page.html',
  styleUrls: ['./hunterequest.page.scss'],
})
export class HunterequestPage implements OnInit {
  public requestUserList: any = [];
  
  public selectedItem: any;
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toast: Toast,
    public router: Router
  ) { }

  ngOnInit() {
    this.selectedItem = null;
    this.requestUserList = [
      {id:0, date:'Sebastian F, 27', author: 'Juan Perez',  name:'Header', avatar:'assets/img/avatar_00.png', time:'hace 1 dia'},
      {id:1, date:'Sebastian F, 28', author: 'Juan Perez', name:'Header', avatar:'assets/img/avatar_01.png', time:'hace 1 dia'},
      {id:2, date:'Sebastian F, 22', author: 'Juan Perez', name:'Header', avatar:'assets/img/avatar_02.png', time:'hace 1 dia'},
      {id:3, date:'Sebastian F, 26', author: 'Juan Perez', name:'Header', avatar:'assets/img/avatar_00.png', time:'hace 1 dia'},
    ];
  }

  back(){
    this.navCtrl.back();
  }
  viewJobDetail(item){
    this.navCtrl.navigateForward('experiences', {queryParams: item});
  }
  remove(item:any){
    console.log("BLOCK>PAGE>>> UNLOAD BUTTON", item);
    this.selectedItem = item;
    if(this.requestUserList.length == 0){
      return;
    }else{
      for(let i = 0; i< this.requestUserList.length; i++){
        let target = this.requestUserList[i];
        if(target.id == item.id){
          this.requestUserList.splice(i, 1);
        }
      }
    }
  }
}
