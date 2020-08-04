import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-job-request',
  templateUrl: './job-request.page.html',
  styleUrls: ['./job-request.page.scss'],
})
export class JobRequestPage implements OnInit {
  public expList:any=[];
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    for(let i =0; i< 5;i++){
      let strExp = "Exp";
      let strIndex = i+1;
      let item = {
        id:i, label: strExp + strIndex
      }
      this.expList.push(item);
    }
  }
  back(){
    this.navCtrl.back();
  }

  share(){
    console.log('JOB-REQUEST.PAGE>>>>> SHARE CLICKED!');
  }
  air(){
    console.log('JOB-REQUEST.PAGE>>>>> AIR CLICKED!');
  }
  expetLevel(expertLevel:any){
    console.log('JOB-REQUEST.PAGE>>>>> EXPERT LEVEL CLICKED!', expertLevel);
  }
}
