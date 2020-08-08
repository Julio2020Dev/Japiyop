import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],
})
export class CommentModalComponent implements OnInit {
  reviewList: any = [];
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
    ]
  }

  ngOnInit() {

  }
  sentComment(){
    this.closeModal();
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(this.reviewList);
  }
}
