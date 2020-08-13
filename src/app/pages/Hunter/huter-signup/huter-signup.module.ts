import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuterSignupPageRoutingModule } from './huter-signup-routing.module';

import { HuterSignupPage } from './huter-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuterSignupPageRoutingModule
  ],
  declarations: [HuterSignupPage]
})
export class HuterSignupPageModule {}
