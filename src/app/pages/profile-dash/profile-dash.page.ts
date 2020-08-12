import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-dash',
  templateUrl: './profile-dash.page.html',
  styleUrls: ['./profile-dash.page.scss'],
})
export class ProfileDashPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  next(){
    
  }
  editProfile(){
    this.navCtrl.navigateForward('edit-profile');
  }
  showProfile(){
    this.navCtrl.navigateForward('show-me');
  }
  general(){
    this.navCtrl.navigateForward('general');
  }
  shareApp(){
    console.log('PROFILE_DASH.PAGE>>>> SHARE APP BUTTON!');
    // this.navCtrl.navigateForward('edit-profile');
  }

}
