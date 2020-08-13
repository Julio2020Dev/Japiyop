import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuterchatPage } from './huterchat.page';

const routes: Routes = [
  {
    path: '',
    component: HuterchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuterchatPageRoutingModule {}
