import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmProfilePageRoutingModule } from './confirm-profile-routing.module';

import { ConfirmProfilePage } from './confirm-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmProfilePageRoutingModule
  ],
  declarations: [ConfirmProfilePage]
})
export class ConfirmProfilePageModule {}
