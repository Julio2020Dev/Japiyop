import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekreviewPageRoutingModule } from './weekreview-routing.module';

import { WeekreviewPage } from './weekreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekreviewPageRoutingModule
  ],
  declarations: [WeekreviewPage]
})
export class WeekreviewPageModule {}
