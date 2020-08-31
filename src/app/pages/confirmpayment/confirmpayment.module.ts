import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmpaymentPageRoutingModule } from './confirmpayment-routing.module';

import { ConfirmpaymentPage } from './confirmpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmpaymentPageRoutingModule
  ],
  declarations: [ConfirmpaymentPage]
})
export class ConfirmpaymentPageModule {}
