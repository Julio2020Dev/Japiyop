import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuterPageRoutingModule } from './huter-routing.module';

import { HuterPage } from './huter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuterPageRoutingModule
  ],
  declarations: [HuterPage]
})
export class HuterPageModule {}
