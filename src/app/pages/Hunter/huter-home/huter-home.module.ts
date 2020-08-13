import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuterHomePageRoutingModule } from './huter-home-routing.module';

import { HuterHomePage } from './huter-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuterHomePageRoutingModule
  ],
  declarations: [HuterHomePage]
})
export class HuterHomePageModule {}
