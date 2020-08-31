import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HunterFilterPageRoutingModule } from './hunter-filter-routing.module';

import { HunterFilterPage } from './hunter-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HunterFilterPageRoutingModule
  ],
  declarations: [HunterFilterPage]
})
export class HunterFilterPageModule {}
