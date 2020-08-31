import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-hunter-home',
  templateUrl: './hunter-home.page.html',
  styleUrls: ['./hunter-home.page.scss'],
})
export class HunterHomePage implements OnInit {
  
  public expList:   any =[];
  showStudy: boolean;
  
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { 
    this.showStudy = true;
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

  //Toolbar Functions -----
  profile(){
    // this.navCtrl.navigateForward('/hunter-profile');
    this.navCtrl.navigateForward('/profile-dash');
  }
  filter(){
    this.navCtrl.navigateForward('hunter-filter');
  }

  message(){
    this.navCtrl.navigateForward('hunter-chat');
  }

  //-- Footer Functions ------
  refresh(){
    console.log('HUNTER_HOME.PAGE>>>>>> REFRESH BUTTON!');
  }

  check(){
    console.log('HUNTER_HOME.PAGE>>>>>> CHECK BUTTON!');
  }
  close(){
    console.log('HUNTER_HOME.PAGE>>>>>> CLOSE BUTTON!');
  }
  chat(){
    console.log('HUNTER_HOME.PAGE>>>>>> CHAT BUTTON!');
  }

  segmentChanged($ev){

  }
  expetLevel(item){
    console.log('HUNTER_HOME.PAGE>>>>>> EXP BUTTON!',item);
  }
  firstCol(){
    this.showStudy = false;
  }
  secondCol(){
    this.showStudy = true;
  }
}
