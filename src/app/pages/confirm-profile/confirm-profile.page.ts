import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-confirm-profile',
  templateUrl: './confirm-profile.page.html',
  styleUrls: ['./confirm-profile.page.scss'],
})
export class ConfirmProfilePage implements OnInit {
  
  userType: any;
  public user:any;

  constructor(
    public router: Router,
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
  ) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log('CONFIRM-PROFILE.TS====USER DATA',res);     
    });
   }

  ngOnInit() {
    this.userType = '';
  }
  signUpWithUser(){
    this.userType = "user";
    let param = {
      type: this.userType
    }
    this.router.navigateByUrl('/signup', {queryParams:param});
  }
  signUpWithJob(){
    console.log('CONFIRM PROFILE PAGE>>>>>>>> SIGNUP AS JOBHUNTER');
    this.userType = 'job';
    let param = {
      type: this.userType
    }
    this.router.navigateByUrl('/hunter-home',  {queryParams:param});
  }
  back(){
    this.navCtrl.back();
  }
}
