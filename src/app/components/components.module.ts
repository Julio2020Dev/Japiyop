import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { JobComponent} from './job/job.component'
import { CommentModalComponent  } from './comment-modal/comment-modal.component';
import { RequestModalComponent } from './request-modal/request-modal.component';
@NgModule({
  declarations: [
    JobComponent,
    CommentModalComponent,
    RequestModalComponent
  ],
  exports: [
    JobComponent,
    CommentModalComponent,
    RequestModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    // TranslateModule.forChild(),
  ]
})
export class ComponentsModule { }
