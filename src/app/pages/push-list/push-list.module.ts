import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushListPageRoutingModule } from './push-list-routing.module';

import { PushListPage } from './push-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushListPageRoutingModule
  ],
  declarations: [PushListPage]
})
export class PushListPageModule {}
