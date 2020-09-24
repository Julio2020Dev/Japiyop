import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
import { HunterService } from '../../services/hunter.service';
import { UserService } from '../../services/user.service';
import { UserData } from '../../providers/user-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showSearch: boolean;
  hunterList : any = [];
  userInfo: any;
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private hunterService: HunterService,
    private userService: UserService,
    private userData: UserData
  ) { 
    this.showSearch = false;
  }

  ngOnInit() {
    this.getCurrentUser();
    this.getHunterDatas();
  }
  getCurrentUser(){
    this.userData.getUserId().then(res=>{
      console.log('Get User ID', res);
      if(res){
        this.userService.getApplicant(res).subscribe(response=>{
          this.userInfo = response;
          console.log('Success User Information', response);
        }),error=>{
          console.log("Error Getting UserInfo", error)
        }
      }
    });
  }
  async getHunterDatas(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando Job Hunters...'
    });
    this.hunterService.getJobHunters().subscribe(res=>{
      this.hunterList = res;
      console.log('JobHunters', res);
      loading.dismiss();
    });
  }
  //-- Goto Profile Page
  profile(){
    this.navCtrl.navigateForward('profile-dash');
  }
  //-- Goto Filter Page
  filter(){
    this.navCtrl.navigateForward('/filter');
    

  }
  //-- Show Search Field
  searchJob(){
    this.showSearch = !this.showSearch;
  }
  closeSearch(){
    this.showSearch = false;
  }

}
