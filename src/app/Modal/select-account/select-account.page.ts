import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.page.html',
  styleUrls: ['./select-account.page.scss'],
})
export class SelectAccountPage {
  @Input() name: string;
  userList: any;

  userInfo = {
    id:'',
    email:'',
    name:''
  }
  constructor(
    public navParams: NavParams,
    private modalController: ModalController,
  ) {
    this.userList = [
      {id:1, name:"Juanperrez", email:'juanperez@dominio.com'},
      {id:2, name:"Juanperrez123", email:'juanperez123@dominio.com'},
    ]
    console.log(navParams.get('name'));
   }
   addUser(ev:any){
    this.userInfo = ev;
    this.closeModal();
   }
   addAccount(){
     this.userInfo = null;
    this.closeModal();
   }
   async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(this.userInfo);
  }

   

}
