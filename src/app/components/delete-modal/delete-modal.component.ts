import { Component, OnInit, Input } from '@angular/core';
import { MenuController, LoadingController, AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
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

  ngOnInit() {
    console.log('Name', this.name);
    this.viewType = this.name;

  }
  delete(){
    let param = "wrapped"
    this.modalCtrl.dismiss(param);
  }
  close(){
    let param = null;
    this.modalCtrl.dismiss(param);
  }
}
