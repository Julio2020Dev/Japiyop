import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekreviewPage } from './weekreview.page';

const routes: Routes = [
  {
    path: '',
    component: WeekreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekreviewPageRoutingModule {}
