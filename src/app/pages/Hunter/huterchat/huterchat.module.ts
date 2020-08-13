import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuterchatPageRoutingModule } from './huterchat-routing.module';

import { HuterchatPage } from './huterchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuterchatPageRoutingModule
  ],
  declarations: [HuterchatPage]
})
export class HuterchatPageModule {}
