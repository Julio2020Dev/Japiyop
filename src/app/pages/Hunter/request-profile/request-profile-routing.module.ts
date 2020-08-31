import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestProfilePage } from './request-profile.page';

const routes: Routes = [
  {
    path: '',
    component: RequestProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestProfilePageRoutingModule {}
