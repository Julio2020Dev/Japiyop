import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMEPageRoutingModule } from './show-me-routing.module';

import { ShowMEPage } from './show-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMEPageRoutingModule
  ],
  declarations: [ShowMEPage]
})
export class ShowMEPageModule {}
