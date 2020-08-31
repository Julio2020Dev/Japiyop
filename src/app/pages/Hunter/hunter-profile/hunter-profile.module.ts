import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HunterProfilePageRoutingModule } from './hunter-profile-routing.module';

import { HunterProfilePage } from './hunter-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HunterProfilePageRoutingModule
  ],
  declarations: [HunterProfilePage]
})
export class HunterProfilePageModule {}
