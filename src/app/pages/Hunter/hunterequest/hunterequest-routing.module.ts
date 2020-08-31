import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HunterequestPage } from './hunterequest.page';

const routes: Routes = [
  {
    path: '',
    component: HunterequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HunterequestPageRoutingModule {}
