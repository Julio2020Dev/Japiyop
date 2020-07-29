import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushDetailsPage } from './push-details.page';

const routes: Routes = [
  {
    path: '',
    component: PushDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushDetailsPageRoutingModule {}
