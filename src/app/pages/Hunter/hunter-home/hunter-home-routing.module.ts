import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HunterHomePage } from './hunter-home.page';

const routes: Routes = [
  {
    path: '',
    component: HunterHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HunterHomePageRoutingModule {}
