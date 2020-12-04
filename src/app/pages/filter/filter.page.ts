import { Component, OnInit } from '@angular/core';
import { LoadingController,  NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FilterOptions } from '../../interfaces/filter-options';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  filter = {category:'', indus:'', position:'', city:''};
  submitted = false;
  checkStatus = {category: false, position:false, industry:false, city:false};
  CATEGORIAS: any = [];
  INDUSTRIAS: any = [];
  CARGO:      any = [];
  CIUDAD:     any = [];
  
  constructor(
    public navCtrl:  NavController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadFilterDatas();
  }
  async loadFilterDatas(){
    let self = this;
    const loading = await this.loadingCtrl.create({
      message: 'Cargando Datas...'
    });
    this.apiService.get('category/').subscribe(res=>{
        self.CATEGORIAS = res;
        console.log('CATEGORIES', res);
        this.checkStatus.category = true;
    }), (error:any)=>{
      console.log('CATEGORIES Getting Error', error);
    }
    this.apiService.get('industry/').subscribe(res=>{
      self.INDUSTRIAS = res;
      console.log('INDUSTRIAS', res);
      self.checkStatus.industry = true;
    }), (error:any)=>{
      console.log('INDUSTRIAS Getting Error', error);
    }
    this.apiService.get('position/').subscribe(res=>{
      self.CARGO = res;
      console.log('CARGO', res);
      self.checkStatus.position = true;
    }), (error:any)=>{
      console.log('CARGO Getting Error', error);
    }
    this.apiService.get('city/').subscribe(res=>{
      self.CIUDAD = res;
      console.log('CIUDAD', res);
      self.checkStatus.city = true;
    }), (error:any)=>{
    console.log('CIUDAD Getting Error', error);
    }
    if(this.checkStatus.category && this.checkStatus.industry && this.checkStatus.position && this.checkStatus.city){
      loading.dismiss();
    }else{
      loading.dismiss();
      alert('Filter Data Getting Error');
    }
  }
  filterApply(form: NgForm){
    this.submitted = true;
    let self = this;
    if(form.valid){
      console.log('FILTER.PAGE.TS>>>>>FILTER DATA', this.filter);
      self.apiService.setFilter(this.filter);
    }
  }
  back(){
    this.navCtrl.back();
  }
}
