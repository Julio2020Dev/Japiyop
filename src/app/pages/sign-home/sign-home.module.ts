import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignHomePageRoutingModule } from './sign-home-routing.module';

import { SignHomePage } from './sign-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignHomePageRoutingModule
  ],
  declarations: [SignHomePage]
})
export class SignHomePageModule {}
