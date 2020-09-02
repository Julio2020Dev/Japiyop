import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController, ModalController } from '@ionic/angular';
import { DialogComponent } from '../../components/dialog/dialog.component';
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

  public completeStatus: any;
  public barStatus:      any;
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
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.viewState = "personal";
    this.barStatus = 0.5;
    this.completeStatus = this.barStatus * 100;
  }

  back(){
    this.navCtrl.back();
  }
//--- Click Smile Icon Actions ---
  showOptions(){
    console.log('EDIT PROFILE.TS>>>>>> SMILE ICON CLICK!');
    this.showOptionModal();
  }
//--- Click Save Button in Person Segment --
  savePerson(){
    console.log('EDIT PROFILE.TS>>>>>> SAVE BUTTON!');
  }

//--- Segment Change Action --
  segmentChanged($ev){
    console.log('EDIT PROFILE.TS>>>>>> SEGMENT CLICK!', $ev);
    this.viewState = $ev.detail.value;
  }

  dateFocus(){

  }
//--- Click Save Button in Experiences
  saveExperience(){
    console.log('EDIT PROFILE.TS>>>>>> SAVE EXPERIENCES BUTTON!');
  }
//--- Click Save Button in Studies --
  saveStudies(){
    console.log('EDIT PROFILE.TS>>>>>> SAVE STUDIES BUTTON!');
  }

  async showOptionModal(){
    const modal = await this.modalCtrl.create({
      component: DialogComponent,
      cssClass: 'optionModal',
      componentProps: {
        'type': 'option',
        'name': "dialog"
      }
    });
    modal.onDidDismiss().then((res) => {
       console.log('Data Returned', res);
       if(res.data ==''){
         return;
       }else if(res.data == 'hunter'){
        this.navCtrl.navigateForward('hunter-home');  
       }else if(res.data == 'request'){
        this.navCtrl.navigateForward('experiences');
       }
      
    });
    return await modal.present();
  }
}
