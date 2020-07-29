import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { JobComponent} from './job/job.component'
@NgModule({
  declarations: [
    JobComponent
  ],
  exports: [
    JobComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    // TranslateModule.forChild(),
  ]
})
export class ComponentsModule { }
