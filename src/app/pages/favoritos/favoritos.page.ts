import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  showSearch: boolean;
  jobList : any = [];
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) { 
    this.jobList = [
      {id:0, title: 'Test Job', author: 'Chris Moscoso L', avatar:'assets/img/avatar_00.png', rate:'4.5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:true},
      {id:1, title: 'Test Job', author: 'Emperatriz Paucar', avatar:'assets/img/avatar_01.png', rate:'5', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false},
      {id:2, title: 'Test Job', author: 'Aria Moscoso P', avatar:'assets/img/avatar_02.png', rate:'4.8', favority: false, details:'Lorem ipsum lorem ipsum Lorem Lorem', time:' Hace 3 hrs', select:false},
    ]
  }

  ngOnInit() {
  }
  search(){

  }
  profile(){
    
  }
}
