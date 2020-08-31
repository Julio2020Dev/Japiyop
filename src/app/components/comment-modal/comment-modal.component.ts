import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],
})
export class CommentModalComponent implements OnInit {
  @Input("type") type: string;
  @Input("name") name: string;
  
  public reviewList: any = [];
  public viewComment: boolean;

  blockHunter: boolean;
  reportHunter: boolean;
  createProposal: boolean;

  viewType = '';
  constructor(
    public navParams: NavParams,
    private modalController: ModalController,
  ) { 
    this.reviewList = [
      {id:0, count:0},
      {id:1, count:1},
      {id:2, count:2},
      {id:3, count:3},
      {id:4, count:4},
    ];
  }

  ngOnInit() {
    console.log('Comment.PAGE>> Name', this.type, this.name);
    this.viewType = this.type;

    this.blockHunter = false;
    this.reportHunter = false;
    this.createProposal = false;
  }
  sentComment(){
    this.closeModal();
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(this.reviewList);
  }

  accept(){
    this.acceptSecurity();
      
  }
  acceptSecurity(){
    const onClosedData: string = "Wrapped Up!";
      this.modalController.dismiss(onClosedData);
  }

}
