import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, AlertController, ModalController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteModalComponent } from '../../../components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {

  public hunter: any;

  public expList:   any =[];
  showStudy: boolean;

  constructor(
    public activatedRoute : ActivatedRoute,
    public navCtrl:  NavController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public router: Router
  ) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.hunter = res;
      console.log('EXPERIENCES.TS====HUNTER DATA',res);    
    });
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
  }
  back(){
    this.navCtrl.back();
  }
  firstCol(){
    this.showStudy = false;
    document.getElementById('first').style.backgroundColor = "gray";
    document.getElementById('second').style.backgroundColor = "white";
  }
  secondCol(){
    this.showStudy = true;
    document.getElementById('first').style.backgroundColor = "white";
    document.getElementById('second').style.backgroundColor = "gray";
  }
  delete(){
    this.showDeleteModal();
  }
  chat(){
    this.navCtrl.navigateForward('chatroom', {queryParams: this.hunter});
  }
  async showDeleteModal(){
    const modal = await this.modalCtrl.create({
      component: DeleteModalComponent,
      cssClass: 'deleteModal',
      componentProps: {
        'name': 'hunter'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.back();
      }else{
        
      }

    });
    return await modal.present();
  }

}
