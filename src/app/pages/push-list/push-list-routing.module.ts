import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushListPage } from './push-list.page';

const routes: Routes = [
  {
    path: '',
    component: PushListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushListPageRoutingModule {}
