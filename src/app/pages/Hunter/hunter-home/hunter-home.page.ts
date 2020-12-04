import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-hunter-home',
  templateUrl: './hunter-home.page.html',
  styleUrls: ['./hunter-home.page.scss'],
})
export class HunterHomePage implements OnInit {
  public availableJobList: any;
  constructor(
    public navCtrl:         NavController,
    public toastController: ToastController,
    private loadCtrl:       LoadingController,
    private apiService:     ApiService
  ) { 
    
  }
  ngOnInit() {
    this.getAvailableJobs();
  }
  async getAvailableJobs(){
    const loading = await this.loadCtrl.create({
      message: 'Cargando trabajos...'
    });
    loading.present();
    
    this.apiService.get('job_hunter/').subscribe(res=>{
        this.availableJobList = res;
        console.log('Available Jobs', res);
        loading.dismiss();
    }), (error:any)=>{
        console.log('Available Job Getting Error', error);
    }

    //Firebase Part --------------------------------------
    // this.userService.getApplicants().subscribe(res=>{
    //   this.availableJobList = res;
    //   loading.dismiss();
    // });
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

}
