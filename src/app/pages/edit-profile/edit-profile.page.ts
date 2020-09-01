import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  
  userName:     any;
  phoneNumber:  any;
  email:        any;
  DNI:          any;
  password:     any;
  birthday:     any;
  city:         any;
  district:     any;

  public viewState: any;

  public currentJobList: any = [];
  public availablJobList: any = [];
  public selectedList: any = [];
  public industList: any =[];

  public jobTypeList: any = [];
  public employList: any = [];

  public remoteAvailable: boolean;
  public relocateAvailable: boolean;

  public employ: any;
  public availableDate: any;

  public startDate: any;
  public endDate: any;

  public employCharge: any;
  public employCentro: any;

  public expertSelectList: any = [];
  public expertList:    any = [];

  public minValue: any;
  public maxValue: any;
  public bonus: any;


  public profession: any;
  public institutionList: any = [];
  public instructList: any = [];

  public startStudyDate: any;
  public endStudyDate: any;
  public special: any;

  public languageList: any = [];
  public certificate: any = [];
  public others: any;

  public othersInstituction: any;
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.viewState = "personal";
  }

  back(){
    this.navCtrl.back();
  }
  savePerson(){
    console.log('EDIT PROFILE.TS>>>>>> SAVE BUTTON!');
  }
  segmentChanged($ev){
    console.log('EDIT PROFILE.TS>>>>>> SEGMENT CLICK!', $ev);
    this.viewState = $ev.detail.value;
  }

  dateFocus(){

  }
  saveExperience(){
    console.log('EDIT PROFILE.TS>>>>>> SAVE EXPERIENCES BUTTON!');
  }
  saveStudies(){
    console.log('EDIT PROFILE.TS>>>>>> SAVE STUDIES BUTTON!');
  }
}
