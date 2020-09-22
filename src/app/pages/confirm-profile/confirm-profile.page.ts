import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
@Component({
  selector: 'app-confirm-profile',
  templateUrl: './confirm-profile.page.html',
  styleUrls: ['./confirm-profile.page.scss'],
})
export class ConfirmProfilePage implements OnInit {
  user:any
  constructor(
    public router: Router,
    public activatedRoute : ActivatedRoute,
    private navCtrl: NavController,
    private userData: UserData
  ) {
      this.activatedRoute.queryParams.subscribe((res)=>{
        this.user = res;
        console.log('CONFIRM-PROFILE.TS====USER DATA',this.user);     
      });
   }

  ngOnInit() {
    
  }
  signUpWithUser(){
    console.log('CONFIRM PROFILE PAGE>>>>>>>> SIGNUP AS APPLICANT');
    let param = {
      id:           this.user.id, 
      first_name:   this.user.first_name, 
      last_name:    this.user.last_name, 
      mobile_phone: this.user.mobile_phone, 
      email:        this.user.email, 
      photo:        this.user.photo, 
      userType:     'applicant'
    }
    this.userData.setUserType(param.userType);
    this.navCtrl.navigateForward('signup', {queryParams: param});
    
  }
  signUpWithJob(){
    console.log('CONFIRM PROFILE PAGE>>>>>>>> SIGNUP AS JOBHUNTER');
    let param = {
      id: this.user.id, 
      first_name:this.user.first_name, 
      last_name:this.user.last_name, 
      mobile_phone:this.user.mobile_phone, 
      email:this.user.email, 
      photo:this.user.photo, 
      userType:'jobHunter'
    }
    this.userData.setUserType(param.userType);
    this.navCtrl.navigateForward('signup',  {queryParams:param});
  }
  back(){
    this.navCtrl.back();
  }
}
