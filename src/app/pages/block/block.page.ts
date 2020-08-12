import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ModalController } from '@ionic/angular';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-block',
  templateUrl: './block.page.html',
  styleUrls: ['./block.page.scss'],
})
export class BlockPage implements OnInit {
  public blockHunterList: any = [];
  public selectedItem: any;
  constructor(
    public navCtrl:  NavController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.selectedItem = null;
    this.blockHunterList = [
      {id:0, date:'Sebastian F, 27', name:'Header', avatar:'assets/img/avatar_00.png', time:'hace 1 dia'},
      {id:1, date:'Sebastian F, 28', name:'Header', avatar:'assets/img/avatar_01.png', time:'hace 1 dia'},
      {id:2, date:'Sebastian F, 22', name:'Header', avatar:'assets/img/avatar_02.png', time:'hace 1 dia'},
      {id:3, date:'Sebastian F, 26', name:'Header', avatar:'assets/img/avatar_00.png', time:'hace 1 dia'},
    ]
  }
  initDatas(){
    this.selectedItem = null;
  }
  back(){
    this.navCtrl.back();
  }
  unlock(item:any){
    console.log("BLOCK>PAGE>>> UNLOAD BUTTON");
    this.selectedItem = item;
    this.showUnlockModal();
  }
  async showUnlockModal(){
    const modal = await this.modalCtrl.create({
      component: DeleteModalComponent,
      cssClass: 'deleteModal',
      componentProps: {
        'name': 'block'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.unlockItem();
      }else{
        
      }

    });
    return await modal.present();
  }
  unlockItem(){
    let item = this.selectedItem;
    if(this.blockHunterList.length == 0){
      return;
    }else{
      for(let i = 0; i< this.blockHunterList.length; i++){
        let title = this.blockHunterList[i];
        if(title.id == item.id){
          this.blockHunterList.splice(i, 1);
          break;
        }
      }
    }
  }
}
