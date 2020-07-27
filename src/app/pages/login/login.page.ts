import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SelectAccountPage } from '../../Modal/select-account/select-account.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataReturned:any;
  constructor(
    public router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }
  onSignWithGoogle(){
     this.showModal();
  }
  onSignWithLinkedIn(){
    this.showModal();
  }
  onSignWithFacebook(){
    this.showModal();
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
  onTermAndConditions(){

  }
  async showModal() {
    const modal = await this.modalController.create({
      component: SelectAccountPage,
      cssClass: 'select-modal',
      componentProps: {
        'name': 'Hello User'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Returned Data', this.dataReturned);
        this.router.navigateByUrl('/confirm-profile');

      }else{
        this.router.navigateByUrl('/confirm-profile');
      }
    });
    return await modal.present();
  }
}
