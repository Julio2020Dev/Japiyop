import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Applicant, JobHunter, UserOptions } from '../../interfaces/user-options';
import { HunterService } from '../../services/hunter.service';
import { UserService } from '../../services/user.service';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  public signup: any = { id:'', first_name: '', last_name:'', phoneNumber: '', email: '', password: '', dni: '', city: '', district: '', userPhoto:'', userType:''};
  private applicant: Applicant;
  private jobHunter: JobHunter;
  private full_name: string;

  public CIUDAD: any = [];
  public DISTRITO: any = [];

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public activatedRoute : ActivatedRoute,
    private loadingCtrl: LoadingController,
    private hunterService: HunterService,
    private userService: UserService,
    private userData: UserData,
    public storage: Storage,
    public apiService: ApiService
  ) { 
    let self = this;
      this.activatedRoute.queryParams.subscribe((res)=>{
        console.log('SIGNUP.TS>>>>>> PARAM', res);
        this.full_name = res.first_name + " " + res.last_name;
        let pNumber = '';
        
        if(res.mobile_phone == null){
          pNumber = ' ';
        }else{
          pNumber = res.mobile_phone
        }

        self.signup = { 
          id:           res.id, 
          first_name:   res.first_name,
          last_name:    res.last_name,
          phoneNumber:  pNumber, 
          email:        res.email, 
          password: '', 
          dni: '', 
          city: '', 
          district: '', 
          userPhoto:    res.photo, 
          userType:     res.userType
        };    
        console.log('SIGNUP.TS>>>>>> PARAM', self.signup);
      });
      
  }
   
  ngOnInit() {
     this.loadData();
     console.log('This Applicant and JobHunter', this.applicant, this.jobHunter);
     this.applicant = {
      id:                     '',
      first_name:             '',
      last_name:              '',
      email:                  '',
      dni:                    '',
      mobile_phone:           '',
      password:               '',
      identification_number:  '',
      city:                   '',
      district:               '',
      studies:                null,
      birthday:                '',
      photo:                  '',
      reported:               false,
      job_situation:          null,
      labor_availability:     null,
      available_date:         null,
      remote_work:            false,
      relocation:             false,
      work_experience:        null,
      languages:              null,
      show_to_job_hunters:    false,
      people_forum_text_me:   null,
      replies_forum:          null,
      forum_message:          null,
      job_hunters_messages:   null,
     };

     this.jobHunter = {
      id:                     '',
      first_name:             '',
      last_name:              '',
      mobile_phone:           '',
      email:                  '',
      password:               '',
      identification_number:  '',
      date_of_birth:          '',
      city:                   '',
      district:               '',
      photo:                  '',
      reported:               '',
      company_logo:           '',
      company_name:           '',
      creed:                  '',
      presentation_video:     '',
      attention_schedule:     '',
      expertise:              '',
      show_to_applicants:     false,
      show_to_forum_contacts: false,
      applicant_messages:     null,
      requests:               null,
      liked_by_applicants:    null,
      forum_answers:          null,
      rating_avarage:         '',
     };
  }
  
  async loadData(){
    let self = this;
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos...'
    });
    this.apiService.get('city/').subscribe(cityData=>{
      console.log('Cities Data ==', cityData.body);
      self.CIUDAD = cityData.body;
      this.apiService.get('district/').subscribe(disData=>{
        console.log('District Data ==', disData.body);
        self.DISTRITO = disData.body;
        loading.dismiss();
      }), (error)=>{
        console.log('District Data Error', error);
        loading.dismiss();
      }
    }),(err:any)=>{
      console.log('Cities Data Error', err);
      loading.dismiss();
    }
  }


  onSignup(form: NgForm) {
    this.submitted = true;
    console.log('Form Submitted!');
    if (form.valid) {
      if(this.signup.userType == 'applicant'){
        this.applicantSingup();
      }else{
        this.jobHunterSignup();
      }
    }
  }
  async applicantSingup(){
    const loading = await this.loadingCtrl.create({
      message: 'Creación de un solicitante...'
    });
    loading.present();
    this.applicant = {
      id:                     this.signup.id,
      first_name:             this.signup.first_name,
      last_name:              this.signup.last_name,
      email:                  this.signup.email,
      mobile_phone:           this.signup.phoneNumber,
      password:               this.signup.password,
      dni:                    this.signup.dni,
      identification_number:  '',
      birthday:               '',
      studies:                null,
      city:                   this.signup.city,
      district:               this.signup.district,
      photo:                  this.signup.userPhoto,
      reported:               false,
      job_situation:          null,
      labor_availability:     null,
      available_date:         null,
      remote_work:            false,
      relocation:             false,
      work_experience:        null,
      languages:              null,
      show_to_job_hunters:    false,
      people_forum_text_me:   null,
      replies_forum:          null,
      forum_message:          null,
      job_hunters_messages:   null,
     };

    this.userService.addApplicant(this.applicant).then(success=>{
      console.log('Add Applicant Success!', success);
      loading.dismiss();
      let userName = this.applicant.first_name + ' ' + this.applicant.last_name;
      this.userData.setUsername(userName);
      this.userData.setUserId(success.id);
      this.applicant.id = success.id;
      this.userService.updateApplicant(this.applicant, success.id);
      this.router.navigateByUrl('/app/tabs/home');
    }), error =>{
      loading.dismiss();
      console.log('Error Add Applicant', error);
    }
    
  }
  async jobHunterSignup(){
    const loading = await this.loadingCtrl.create({
      message: 'Creando un cazador de empleo...'
    });
    loading.present();
    this.jobHunter = {
      id:                     this.signup.id,
      first_name:             this.signup.first_name,
      last_name:              this.signup.last_name,
      mobile_phone:           this.signup.phoneNumber,
      email:                  this.signup.email,
      password:               this.signup.password,
      identification_number:  '',
      date_of_birth:          '',
      city:                   this.signup.city,
      district:               this.signup.district,
      photo:                  this.signup.userPhoto,
      reported:               '',
      company_logo:           '',
      company_name:           '',
      creed:                  '',
      presentation_video:     '',
      attention_schedule:     '',
      expertise:              '',
      show_to_applicants:     false,
      show_to_forum_contacts: false,
      applicant_messages:     null,
      requests:               null,
      liked_by_applicants:    null,
      forum_answers:          null,
      rating_avarage:         '',
     };
    console.log('Hunter Signup');
    this.hunterService.addHunter(this.jobHunter).then(success=>{
      console.log('Add Hunter Success!', success);
      let userName = this.jobHunter.first_name + ' ' + this.jobHunter.last_name;
      this.userData.setUsername(userName);
      this.userData.setUserId(success.id);
      this.jobHunter.id = success.id;
      this.hunterService.updateHunter(this.jobHunter,success.id);
      this.router.navigateByUrl('/hunter-home');
      loading.dismiss();
    }), error =>{
      loading.dismiss();
      console.log('Error Add Hunter', error);
    }
    
  }
}
