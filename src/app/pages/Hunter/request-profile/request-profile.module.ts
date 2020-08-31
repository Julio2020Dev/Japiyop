import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestProfilePageRoutingModule } from './request-profile-routing.module';

import { RequestProfilePage } from './request-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestProfilePageRoutingModule
  ],
  declarations: [RequestProfilePage]
})
export class RequestProfilePageModule {}
