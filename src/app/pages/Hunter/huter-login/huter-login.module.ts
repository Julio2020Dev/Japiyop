import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuterLoginPageRoutingModule } from './huter-login-routing.module';

import { HuterLoginPage } from './huter-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuterLoginPageRoutingModule
  ],
  declarations: [HuterLoginPage]
})
export class HuterLoginPageModule {}
