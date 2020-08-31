import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, AlertController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hunter-filter',
  templateUrl: './hunter-filter.page.html',
  styleUrls: ['./hunter-filter.page.scss'],
})
export class HunterFilterPage implements OnInit {
  public chargeList:    any = [];
  public expertList:    any = [];
  public availableList: any = [];
  public indusList:     any = [];
  public cityList:      any = [];
  public disList:       any = [];
  public selectedList:  any = [];

  minValue:       any;
  maxValue:       any;
  startDateChage: any;
  startDate:      any;
  endDate:        any;

  remote:       any;
  relocation:   any;
  selectedItem: any;
  
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toast: Toast,
    public router: Router
  ) { 
    this.chargeList = [
      {id:0, name:'Bachiller'},
      {id:1, name:'Bachiller'}
    ];

    this.expertList = [
      {id:0, name:'Cobbranzas'},
      {id:1, name:'Bachiller'}
    ];
    this.availableList = [
      {id:0, name:'A partir de'},
      {id:1, name:'Bachiller'}
    ];
    this.indusList = [
      {id:0, name:'A partir de'},
      {id:1, name:'Bachiller'}
    ];

    this.cityList = [
      {id:0, name:'A partir de'},
      {id:1, name:'Bachiller'}
    ];

    this.disList = [
      {id:0, name:'A partir de'},
      {id:1, name:'Bachiller'}
    ];

    this.selectedList = [
      {id: 0, title:'Ventas'},
      {id: 1, title:'Management'},
      {id: 2, title:'Web Pogrammer'},
    ]
    this.remote = false;
    this.relocation = false;
    this.selectedItem = null;

  }

  ngOnInit() {
  }

  back(){
    this.navCtrl.back();
  }
  removeSelect(item){
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
  dateFocus(){

  }
  saveFilter(){

  }

}
