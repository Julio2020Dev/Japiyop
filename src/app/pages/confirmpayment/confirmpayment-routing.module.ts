import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmpaymentPage } from './confirmpayment.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmpaymentPageRoutingModule {}
