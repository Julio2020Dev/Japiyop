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

  GRADO_DE_INSTRUCCION: any[]=[
    {id:0, name:'Secundaria'},
    {id:1, name:'Técnico'},
    {id:2, name:'Universitario'},
    {id:3, name:'Master'},
    {id:4, name:'Doctorado'},
  ];

  TIPO_DE_CARGO_EN_EMPLEO_1:any[]=[
    {id:0, name:'Asistente'},
    {id:1, name:'Técnico / operativo'},
    {id:2, name:'Ejecutivo / representante'},
    {id:3, name:'Supervisor / coordinador'},
    {id:4, name:'Practicante profesional'},
    {id:5, name:'Jefatura / Sub gerencia'},
    {id:6, name:'Analista'},
    {id:7, name:'Gerencia'},
    {id:8, name:'Dirección'},
  ];
  INDUSTRIA_DEL_EMPLEO: any[]=[
    {id:0, name:'Banca'},
    {id:1, name:'Consumo Masivo'},
    {id:2, name:'Ingeniería y Manufactura'},
    {id:3, name:'Minería'},
    {id:4, name:'Retail'},
    {id:5, name:'Seguros'},
    {id:6, name:'Tech & TI'},
    {id:7, name:'Telecomunicaciones'},
    {id:8, name:'*Todas las anteriores'},
  ];
  NUMERO_DE_EMPLEADOS_DEL_CENTRO: any[]=[
    {id:0, name:'1-20 personas'},
    {id:1, name:'21-50 personas'},
    {id:2, name:'51-100 personas'},
    {id:3, name:'101-500 personas'},
    {id:4, name:'501-1000 personas'},
    {id:5, name:'1001-5000 personas'},
    {id:6, name:'Más de 5000 personas'} 
  ];

  EXPERTISE: any[]=[
    {id:0, name:'Big Data / Data Analytics'},
    {id:1, name:'Finanzas y Contabilidad'},
    {id:2, name:'Gestión de proyectos'},
    {id:3, name:'Marketing'},
    {id:4, name:'Operaciones y procesos'},
    {id:5, name:'Recursos Humanos'},
    {id:6, name:'Supply Chain & Procurement'},
    {id:7, name:'Ventas Técnicas'},
    {id:8, name:'Ventas'},
    {id:9, name:'*Todas las anteriores'},
  ];

  SITUACION_LABORAL_ACTUAL: any[]=[
    {id:0, name:'Empleado'},
    {id:1, name:'Sin empleo'},
  ];
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
  startDateCharge: any;
  endDateCharge: any;
  lastEmploy: boolean;
  employPosition: any;
  indusEmploy: any;
  workspaceName: any;
  companyName: any;
  employCount: any;
  employCharge: any;
  jobSituation: any;

  selectedItem: any;

  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toast: Toast,
    public router: Router
  ) { 
     
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
  addExpertise(event: any){
    console.log('PROFILE.PAGE<<<<< ADD ITEM', event)
    let item = event.detail.value;
    this.selectedList.push({id: this.selectedList.length, title: item});
  }
  removeSelect(item:any){
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
