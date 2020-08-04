import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {

  public job: any;
  public expList:any=[];
  constructor(
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    ) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.job = res;
      console.log('JOBDETAILS.TS====JOBS',res);
     
    });
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
  back(){
    this.navCtrl.back();
  }
  contact(){
    console.log('JOB_DETAILS.PAG>>>> CONTACT BUTTON CLICKED!');
  }
  expetLevel(item:any){
    console.log('JOB_DETAILS.PAG>>>> EXP BUTTON CLICKED!', item);
  }
  share(){
    console.log('JOB_DETAILS.PAG>>>> SHARING ICON CLICKED!');
  }

}
