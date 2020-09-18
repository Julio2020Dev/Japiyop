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
    this.showStudy = false;
    document.getElementById('first').style.backgroundColor = "gray";
    document.getElementById('second').style.backgroundColor = "white";
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
    this.showStudy = true;
    document.getElementById('first').style.backgroundColor = "white";
    document.getElementById('second').style.backgroundColor = "gray";
  }

  check(){
    console.log('HUNTER_HOME.PAGE>>>>>> CHECK BUTTON!');
    this.togglePage();
        
  }
  close(){
    console.log('HUNTER_HOME.PAGE>>>>>> CLOSE BUTTON!');
    this.togglePage();
  }
  chat(){
    console.log('HUNTER_HOME.PAGE>>>>>> CHAT BUTTON!');
    this.togglePage();
  }

  segmentChanged($ev:any){

  }
  expetLevel(item:any){
    console.log('HUNTER_HOME.PAGE>>>>>> EXP BUTTON!',item);
  }
  firstCol($ev:any){
    this.showStudy = false;
    console.log('HUNTER_HOME.PAGE.TS>>>>>> FIRST COL', $ev.target.id);
    document.getElementById('first').style.backgroundColor = "gray";
    document.getElementById('second').style.backgroundColor = "white";
  }
  secondCol($ev:any){
    this.showStudy = true;
    document.getElementById('first').style.backgroundColor = "white";
    document.getElementById('second').style.backgroundColor = "gray";
    console.log('HUNTER_HOME.PAGE.TS>>>>>> SECOND COL', $ev.target.id);
  }

  togglePage(){
    if(!this.showStudy){
      this.showStudy = true;
      document.getElementById('first').style.backgroundColor = "white";
      document.getElementById('second').style.backgroundColor = "gray";
    }else{
      this.showStudy = false;
      document.getElementById('first').style.backgroundColor = "gray";
      document.getElementById('second').style.backgroundColor = "white";
    }
  } 
}
