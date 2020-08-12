import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, ModalController } from '@ionic/angular';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public paymentList: any = [];
  selectedItem: any;
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.paymentList = [
      {id:0, type:'card', number:'Visa****111', expireData: ''}
    ];
    this.selectedItem = null;
  }
  back(){
    this.navCtrl.back();
  }
  add(){
    this.navCtrl.navigateForward('addpayment');
  }
  delete(item:any){
    this.selectedItem = item;
    this.showDeleteModal();
  }
  deleteSelectMethod(){
    let item = this.selectedItem;
    if(this.paymentList.length == 0){
      return;
    }else{
      for(let i = 0; i< this.paymentList.length; i++){
        let title = this.paymentList[i];
        if(title.id == item.id){
          this.paymentList.splice(i, 1);
          break;
        }
      }
    }
  }
  async showDeleteModal(){
    const modal = await this.modalCtrl.create({
      component: DeleteModalComponent,
      cssClass: 'deleteModal',
      componentProps: {
        'name': 'payment'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.deleteSelectMethod();
      }else{
        
      }

    });
    return await modal.present();
  }

}
