import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController,  NavController, ModalController } from '@ionic/angular';
import {  DeleteModalComponent} from '../../components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {

  constructor(
    public router: Router,
    public navCtrl:  NavController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.back();
  }

  notification(){
    this.navCtrl.navigateForward('notification');
  }
  payment(){
    this.navCtrl.navigateForward('payment');
  }
  ask(){
    this.navCtrl.navigateForward('ask');
  }
  policy(){
    this.navCtrl.navigateForward('policy');
  }
  termAndCondition(){
    this.navCtrl.navigateForward('terms');
  }
  contact(){
    this.navCtrl.navigateForward('contact');
  }
  blocked(){
    this.navCtrl.navigateForward('block');
  }
  logout(){
    this.showLogoutModal();
  }
  async showLogoutModal(){
    const modal = await this.modalCtrl.create({
      component: DeleteModalComponent,
      cssClass: 'deleteModal',
      componentProps: {
        'name': 'logout'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.router.navigateByUrl('/login', { replaceUrl: true })
      }else{
        
      }

    });
    return await modal.present();
  }
}
