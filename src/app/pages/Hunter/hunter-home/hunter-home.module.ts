import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HunterHomePageRoutingModule } from './hunter-home-routing.module';

import { HunterHomePage } from './hunter-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HunterHomePageRoutingModule
  ],
  declarations: [HunterHomePage]
})
export class HunterHomePageModule {}
