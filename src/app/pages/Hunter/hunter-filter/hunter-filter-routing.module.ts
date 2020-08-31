import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HunterFilterPage } from './hunter-filter.page';

const routes: Routes = [
  {
    path: '',
    component: HunterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HunterFilterPageRoutingModule {}
