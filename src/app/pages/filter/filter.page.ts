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
  
  filter: FilterOptions = { category: '', indus: '', position: '', city: ''};
  
  categoryList: any =[];
  indusList:    any =[];
  positionList: any = [];
  cityList:     any = []

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
      console.log('Form Validate Successed!')
    }
  }
  back(){
    this.navCtrl.back();
  }
}
