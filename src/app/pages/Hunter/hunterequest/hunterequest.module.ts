import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HunterequestPageRoutingModule } from './hunterequest-routing.module';

import { HunterequestPage } from './hunterequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HunterequestPageRoutingModule
  ],
  declarations: [HunterequestPage]
})
export class HunterequestPageModule {}
