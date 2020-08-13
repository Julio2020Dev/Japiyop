import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuterProfilePageRoutingModule } from './huter-profile-routing.module';

import { HuterProfilePage } from './huter-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuterProfilePageRoutingModule
  ],
  declarations: [HuterProfilePage]
})
export class HuterProfilePageModule {}
