import { Component, OnInit,Input } from '@angular/core';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input("name") name: string;
  viewType = '';
  constructor(
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}
  
  hunter(){
    let param = "hunter";
    this.modalCtrl.dismiss(param);
  }
  request(){
    let param = "request";
    this.modalCtrl.dismiss(param);
  }

}
