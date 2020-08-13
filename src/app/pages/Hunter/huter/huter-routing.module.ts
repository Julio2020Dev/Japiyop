import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuterPage } from './huter.page';

const routes: Routes = [
  {
    path: '',
    component: HuterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuterPageRoutingModule {}
