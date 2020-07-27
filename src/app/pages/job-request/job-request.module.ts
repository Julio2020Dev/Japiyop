import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobRequestPageRoutingModule } from './job-request-routing.module';

import { JobRequestPage } from './job-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobRequestPageRoutingModule
  ],
  declarations: [JobRequestPage]
})
export class JobRequestPageModule {}
