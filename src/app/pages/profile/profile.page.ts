import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Toast } from '@ionic-native/toast/ngx';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public degreeList:  any = [];
  public jobTypeList:   any = [];
  public chargeList:    any = [];
  public expertList:    any = [];
  public selectedList:  any = [];
  public jobList:       any = [];

  profession: any;
  degree: any;
  startDate: any;
  endDate: any;
  remoteAvailable: boolean;
  relocateAvailable: boolean;

  chargeEmploy: any;
  startDateChage: any;
  endDateCharge: any;
  lastEmploy: boolean;
  jobTitle: any;
  indusEmploy: any;
  workspaceName: any;
  companyName: any;
  employCount: any;
  employCharge: any;

  selectedItem: any;

  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toast: Toast,
    public router: Router
  ) { 
    this.degreeList = [
      {id:0, name:'Bachiller'},
      {id:1, name:'Bachiller'}
    ];
    this.jobTypeList = [
      {id:0, name:'Directivo'},
      {id:1, name:'Directivo'}
    ];

    this.chargeList = [
      {id:0, value:"0 a 100"},
      {id:0, value:"100 a 1000"},
      {id:0, value:"1000 a 5000"},
      {id:0, value:"5000 a 10k"},

    ];

    this.expertList = [
      {id:0, value: "Ventas"},
      {id:0, value: "Management"},
      {id:0, value: "Conbranzas"},
    ];
    this.jobList = [
      {id:0, value:'Manageer'},
      {id:1, value:'Developer'},
    ];
    this.remoteAvailable = false;
    this.relocateAvailable = false;
    this.lastEmploy = false;
    this.selectedItem = null;
  }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
  removeSelect(item:any){
    this.selectedItem = item;
  }
  saveAndSendRequest(){
    console.log('USER PROFILE.PAGE>>>> SAVE AND SEND REQUEST BUTTON CLICKED!');
    // this.toast.show(`Enviado con éxito`, '5000', 'center').subscribe(
    //   toast => {
    //     console.log(toast);
    //   }
    // );
    this.router.navigateByUrl('/app/tabs/home', { replaceUrl: true });
  }
}
