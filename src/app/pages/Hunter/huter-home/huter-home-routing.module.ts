import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuterHomePage } from './huter-home.page';

const routes: Routes = [
  {
    path: '',
    component: HuterHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuterHomePageRoutingModule {}
