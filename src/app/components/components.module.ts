
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { JobComponent} from './job/job.component'
import { CommentModalComponent  } from './comment-modal/comment-modal.component';
import { RequestModalComponent } from './request-modal/request-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
@NgModule({
  declarations: [
    JobComponent,
    CommentModalComponent,
    RequestModalComponent,
    DeleteModalComponent
  ],
  exports: [
    JobComponent,
    CommentModalComponent,
    RequestModalComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    // TranslateModule.forChild(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
