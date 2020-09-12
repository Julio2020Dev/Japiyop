import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FilterOptions } from '../../interfaces/filter-options';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  public filter = {category:'', indus:'', position:'', city:''};
  CATEGORIAS: any[]=[
    {id:0, name:'Signature'},
    {id:1, name:'Platinum'},
    {id:2, name:'Gold'},
    {id:3, name:'Blue'},
  ];
  INDUSTRIAS_ESPECIALIZADAS: any[]=[
    {id:0, name:'Banca'},
    {id:1, name:'Consumo Masivo'},
    {id:2, name:'Ingeniería y Manufactura'},
    {id:3, name:'Minería'},
    {id:4, name:'Retail'},
    {id:5, name:'Seguros'},
    {id:6, name:'Tech & TI'},
    {id:7, name:'Telecomunicaciones'},
    {id:8, name:'*Todas las anteriores'}      
  ];
  CARGO: any[]=[
    {id:0, name:'Analista / Asistente / Trainee'},
    {id:1, name:'Mando medio (Coord / Jefe / Sub Gerente) '},
    {id:2, name:'Alto mando'},
    {id:3, name:'*Todas las anteriores'},
  ];
  CIUDAD: any[]=[
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

  submitted = false;
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }
  filterApply(form: NgForm){
    this.submitted = true;
    if(form.valid){
      console.log('FILTER.PAGE.TS>>>>>FILTER DATA', this.filter);
    }
  }
  back(){
    this.navCtrl.back();
  }
}
