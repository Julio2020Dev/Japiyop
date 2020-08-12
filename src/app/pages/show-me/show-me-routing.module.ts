import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMEPage } from './show-me.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMEPageRoutingModule {}
