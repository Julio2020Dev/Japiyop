import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
import { RequestModalComponent } from '../../components/request-modal/request-modal.component';
@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  dataReturned:         any;

  public jobList:       any = [];
  public selectedList:  any = [];
  public availableList: any = [];
  public availableDate: any;
  public lastPay:       any;
  public mixSalary:     any;
  public maxSalary:     any;
  public saveDefault: boolean;
  constructor(
    public activatedRoute : ActivatedRoute,
    public router: Router,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    this.jobList = [
      {id: 0, title:'Project Manager'},
      {id: 0, title:'Mobile Developer'},
      {id: 0, title:'C Programmer'},
      {id: 0, title:'Web Designer'},
      {id: 0, title:'Front-End Developer'},
      {id: 0, title:'Back-End Developer'},
      {id: 0, title:'Mobile Game Expert'},

    ]
    this.selectedList = [
      {id: 0, title:'Product Manager'},
      {id: 1, title:'Modile Developer'},
      {id: 2, title:'Web Pogrammer'},
    ]
   }

  ngOnInit() {
  }
  back(){
    console.log('REQUEST.PAGE>>>>>> BACK BUTTON CLICKED!');
  }
  addTitle(event: any){
    console.log('REQUEST.PAGE<<<<< ADd ITEM', event)
    let item = event.detail.value;
    this.selectedList.push({id: this.selectedList.length, title: item});
  }
  removeSelect(item:any){
    console.log('REQUEST.PAGE<<<<< REMOVE ITEM', item);
    if(this.selectedList.length == 0){
      return;
    }else{
      for(let i = 0; i< this.selectedList.length; i++){
        let title = this.selectedList[i];
        if(title.id == item.id){
          this.selectedList.splice(i, 1);
          break;
        }
      }
    }
  }
  requestService(){
    console.log('REQUEST.PAGE>>>>>> REQUEST BUTTON CLICKED!');
    this.showModal();

  }
  dateFocus(){

  }
  async showModal(){
    const modal = await this.modalCtrl.create({
      component: RequestModalComponent,
      cssClass: 'requestModal',
      componentProps: {
        'name': 'Hello User'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Returned Data', this.dataReturned);
      }else{
      }
      this.navCtrl.navigateForward('reviews');
    });
    return await modal.present();
  }
}
