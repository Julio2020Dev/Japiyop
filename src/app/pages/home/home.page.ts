import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
import { HunterService } from '../../services/hunter.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showSearch: boolean;
  hunterList : any = [];
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private hunterService: HunterService,
    private userService: UserService
  ) { 
    this.showSearch = false;
    this.hunterList = [
      {id:0, title: 'Test Job', author: 'Chris Moscoso L', avatar:'assets/img/avatar_00.png', rate:'4.5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:true},
      {id:1, title: 'Test Job', author: 'Emperatriz Paucar', avatar:'assets/img/avatar_01.png', rate:'5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false},
      {id:2, title: 'Test Job', author: 'Aria Moscoso P', avatar:'assets/img/avatar_02.png', rate:'4.8', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false},
    ]
  }

  ngOnInit() {
    this.getHunterDatas();
  }
  async getHunterDatas(){
    this.hunterService.getJobHunters().subscribe(res=>{
      this.hunterList = res;
      console.log('JobHunters', res);
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
