import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushDetailsPageRoutingModule } from './push-details-routing.module';

import { PushDetailsPage } from './push-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushDetailsPageRoutingModule
  ],
  declarations: [PushDetailsPage]
})
export class PushDetailsPageModule {}
