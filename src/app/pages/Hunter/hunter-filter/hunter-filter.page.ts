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
  TIPO_DE_CARGO: any[]=[
    {id:0, name:'Analista'},
    {id:1, name:'Técnico'},
    {id:2, name:'Analista Senior'},
    {id:3, name:'Ejecutivo'},
    {id:4, name:'Coordinador'},
    {id:5, name:'Jefe/Sub Gerente'},
    {id:6, name:'Gerente'},
    {id:7, name:'Alta Gerencia (VP, Director, Mesa Directiva)'},
    {id:8, name:'*Todas las anteriores'},
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
  
  DISPONIBILIDAD: any[]=[
    {id:0, name:'Disponibilidad inmediata'},
    {id:1, name:'A partir de'}
  ];
  INDUSTRIA: any[]=[
    {id:0, name:'Banca'},
    {id:1, name:'Consumo Masivo'},
    {id:2, name:'Ingeniería y Manufactura'},
    {id:3, name:'Minería'},
    {id:4, name:'Retail'},
    {id:5, name:'Seguros'},
    {id:6, name:'Tech & TI'},
    {id:7, name:'Telecomunicaciones'},
    {id:8, name:'*Todas las anteriores'}
  ]
  CIUDAD : any[]=[
    { id: 0, name:'Amazonas'},
    { id: 1, name:'Ancash'},
    { id: 2, name:'Apurimac'},
    { id: 3, name:'Arequipa'},
    { id: 4, name:'Ayacucho'},
    { id: 5, name:'Cajamarca'},
    { id: 6, name:'Callao'},
    { id: 7, name:'Cusco'},
    { id: 8, name:'Huancavelica'},
    { id: 9, name:'Huanuco'},
    { id: 10, name:'Ica'},
    { id: 11, name:'Junín'},
    { id: 12, name:'La Libertad'},
    { id: 13, name:'Lambayeque'},
    { id: 14, name:'Lima'},
    { id: 15, name:'Loreto'},
    { id: 16, name:'Madre de Dios'},
    { id: 17, name:'Moquegua'},
    { id: 18, name:'Pasco'},
    { id: 19, name:'Piura'},
    { id: 20, name:'Puno'},
    { id: 21, name:'San Martín'},
    { id: 22, name:'Tacna'},
    { id: 23, name:'Tumbes'},
    { id: 24, name:'Ucayali'}       
  ];
  DISTRITO: any[]=[
    {id:0, name:"Ancón"},
    {id:1, name: 'Ate Vitarte'}, 
    {id:2, name: 'Barranco'}, 
    {id:3, name: 'Breña'}, 
    {id:4, name: 'Carabayllo'}, 
    {id:5, name: 'Chaclacayo'}, 
    {id:6, name: 'Chorrillos'},
    {id:7, name: 'Cieneguilla'}, 
    {id:8, name: 'Comas'}, 
    {id:9, name: 'El Agustino'}, 
    {id:10, name: 'Independencia'}, 
    {id:11, name: 'Jesús María'},
    {id:12, name: 'La Molina'}, 
    {id:13, name: 'La Victoria'}, 
    {id:14, name: 'Cercado de Lima'}, 
    {id:15, name: 'Los Olivos'},
    {id:16, name: 'Lurigancho'},
    {id:17, name: 'Lurín'}, 
    {id:18, name: 'Magdalena del Mar'}, 
    {id:19, name: 'Miraflores'}, 
    {id:20, name: 'Pachacamac'}, 
    {id:21, name: 'Pucusana'},
    {id:22, name: 'Pueblo Libre'},
    {id:23, name: 'Puente Piedra'}, 
    {id:24, name: 'Punta Hermosa'}, 
    {id:25, name: 'Punta Negra'}, 
    {id:26, name: 'Rímac'},
    {id:27, name: 'San Bartolo'}, 
    {id:28, name: 'San Borja'}, 
    {id:29, name: 'San Isidro'}, 
    {id:30, name: 'San Juan de Lurigancho'}, 
    {id:31, name: 'San Juan de Miraflores'},
    {id:32, name: 'San Luis'}, 
    {id:33, name: 'San Martín de Porres'}, 
    {id:34, name: 'San Miguel'}, 
    {id:35, name: 'Santa Anita'}, 
    {id:36, name: 'Santa María del Mar'},
    {id:37, name: 'Santa Rosa'}, 
    {id:38, name: 'Santiago de Surco'}, 
    {id:39, name: 'Surquillo'}, 
    {id:40, name: 'Villa El Salvador'}, 
    {id:41, name: 'Villa María del Triunfo'},
    {id:42, name: 'Otro'},
  ];

  public selectedList:  any = [];

  minValue:       any;
  maxValue:       any;
  startDateCharge: any;
  startDate:      any;
  endDate:        any;

  remote:       any;
  relocation:   any;
  available:    any;
  industrial:   any;
  city:         any;
  district:     any;

  selectedItem: any;
  
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toast: Toast,
    public router: Router
  ) { 
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
