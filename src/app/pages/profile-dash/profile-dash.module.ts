import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDashPageRoutingModule } from './profile-dash-routing.module';

import { ProfileDashPage } from './profile-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDashPageRoutingModule
  ],
  declarations: [ProfileDashPage]
})
export class ProfileDashPageModule {}
