import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuterTabsPageRoutingModule } from './huter-tabs-routing.module';

import { HuterTabsPage } from './huter-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuterTabsPageRoutingModule
  ],
  declarations: [HuterTabsPage]
})
export class HuterTabsPageModule {}
