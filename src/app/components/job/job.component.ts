import { Component, OnInit, Input } from '@angular/core';
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
  ) { }

  ngOnInit() {

  }
  gotoJobDetails(){
    this.navCtrl.navigateForward('job-details', {queryParams: this.p});
  }

}
