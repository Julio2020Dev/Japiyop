import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HunterProfilePage } from './hunter-profile.page';

const routes: Routes = [
  {
    path: '',
    component: HunterProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HunterProfilePageRoutingModule {}
