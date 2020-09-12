import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
import { RequestModalComponent } from '../../components/request-modal/request-modal.component';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  dataReturned:         any;
  selectedItem:         any;
  public requestData = {
    jobTitle: '',
    industy: '',
    available: '',
    available_date: '',
    remuner: '',
    maxValue: '',
    minValue: ''
    
  };

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
      {id: 1, title:'Mobile Developer'},
      {id: 2, title:'C Programmer'},
      {id: 3, title:'Web Designer'},
      {id: 4, title:'Front-End Developer'},
      {id: 5, title:'Back-End Developer'},
      {id: 6, title:'Mobile Game Expert'},

    ]
    this.selectedList = [
      {id: 0, title:'Product Manager'},
      {id: 1, title:'Modile Developer'},
      {id: 2, title:'Web Pogrammer'},
    ]
   }

  ngOnInit() {
  }
  initDatas(){
    this.requestData = {
      jobTitle: '',
      industy: '',
      available: '',
      available_date: '',
      remuner: '',
      maxValue: '',
      minValue: ''
      
    };
    this.selectedItem = null;
  }
  back(){
    console.log('REQUEST.PAGE>>>>>> BACK BUTTON CLICKED!');
    this.navCtrl.back();
  }
  addTitle(event: any){
    console.log('REQUEST.PAGE<<<<< ADd ITEM', event)
    let item = event.detail.value;
    this.selectedList.push({id: this.selectedList.length, title: item});
  }
  removeSelect(item:any){
    console.log('REQUEST.PAGE<<<<< REMOVE ITEM', item);
    this.selectedItem = item;
    this.showDeleteModal();
  }
  deleteSelectItem(){
    let item = this.selectedItem;
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
      console.log('DataReturned', dataReturned);
      if (dataReturned.data !== null) {
        this.dataReturned = dataReturned.data;
      }else{
        this.navCtrl.navigateForward('profile');
      }

    });
    return await modal.present();
  }
  async showDeleteModal(){
    const modal = await this.modalCtrl.create({
      component: DeleteModalComponent,
      cssClass: 'deleteModal',
      componentProps: {
        'name': 'request'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.deleteSelectItem();
      }else{
        
      }

    });
    return await modal.present();
  }
}
