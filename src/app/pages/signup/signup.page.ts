import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  signup: UserOptions = { username: '', phonenumber: '', email: '', password: '', dni: '', city: '', district: '' };
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
  
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }
   
   
  ngOnInit() {
     
  }
  onSignup(form: NgForm) {
    this.submitted = true;
    console.log('Form Submitted!');
    if (form.valid) {
      // this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/home');
    }
  }
}
