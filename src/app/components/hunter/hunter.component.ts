import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-hunter',
  templateUrl: './hunter.component.html',
  styleUrls: ['./hunter.component.scss'],
})
export class HunterComponent implements OnInit {
  @Input('data') job:any;//job data
  @Input('type') type:any;

  showStudy:      boolean;
  public expList: any =[];
  constructor(
    public navCtrl:  NavController,
    public router: Router
  ) { 

  }

  ngOnInit() {
    for(let i =0; i< 9;i++){
      let strExp = "Exp";
      let strIndex = i+1;
      let item = {
        id:i, label: strExp + strIndex
      }
      this.expList.push(item);
    }
    this.showStudy = false;
    document.getElementById('first').style.backgroundColor = "gray";
    document.getElementById('second').style.backgroundColor = "white";
  }
  //-- Footer Functions ------
  refresh(){
    console.log('HUNTER_COMPONENT.PAGE>>>>>> REFRESH BUTTON!');
    this.showStudy = true;
    document.getElementById('first').style.backgroundColor = "white";
    document.getElementById('second').style.backgroundColor = "gray";
  }

  check(){
    console.log('HUNTER_COMPONENT.PAGE>>>>>> CHECK BUTTON!');
    this.togglePage();
        
  }
  close(){
    console.log('HUNTER_COMPONENT.PAGE>>>>>> CLOSE BUTTON!');
    this.togglePage();
  }
  chat(){
    console.log('HUNTER_COMPONENT.PAGE>>>>>> CHAT BUTTON!');
    this.togglePage();
    this.navCtrl.navigateForward('chatroom', {queryParams: this.job})
  }

  segmentChanged(event:any){
    console.log('Applicant Segment', event);
  }
  expetLevel(item:any){
    console.log('HUNTER_COMPONENT.PAGE>>>>>> EXP BUTTON!',item);
  }
  firstCol($ev:any){
    this.showStudy = false;
    console.log('HUNTER_COMPONENT>>>>>> FIRST COL', $ev.target.id);
    document.getElementById('first').style.backgroundColor = "gray";
    document.getElementById('second').style.backgroundColor = "white";
  }
  secondCol($ev:any){
    this.showStudy = true;
    document.getElementById('first').style.backgroundColor = "white";
    document.getElementById('second').style.backgroundColor = "gray";
    console.log('HUNTER_COMPONENT>>>>>> SECOND COL', $ev.target.id);
  }

  togglePage(){
    if(!this.showStudy){
      this.showStudy = true;
      document.getElementById('first').style.backgroundColor = "white";
      document.getElementById('second').style.backgroundColor = "gray";
    }else{
      this.showStudy = false;
      document.getElementById('first').style.backgroundColor = "gray";
      document.getElementById('second').style.backgroundColor = "white";
    }
  } 

}
