import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuterProfilePage } from './huter-profile.page';

const routes: Routes = [
  {
    path: '',
    component: HuterProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuterProfilePageRoutingModule {}
