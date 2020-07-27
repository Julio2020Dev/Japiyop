import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmProfilePage } from './confirm-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmProfilePageRoutingModule {}
