import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  @Input('data') p:any;//job data
  @Input('type') type:any;

  constructor(
    public navCtrl:  NavController,
    public router: Router,
  ) { }

  ngOnInit() {

  }
  gotoJobDetails(){
    this.navCtrl.navigateForward('hunter-details', {queryParams: this.p});

  }

}
