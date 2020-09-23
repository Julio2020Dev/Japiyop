import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HunterHomePageRoutingModule } from './hunter-home-routing.module';

import { HunterHomePage } from './hunter-home.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HunterHomePageRoutingModule
  ],
  declarations: [HunterHomePage]
})
export class HunterHomePageModule {}
