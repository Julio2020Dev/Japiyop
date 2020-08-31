import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptContractPage } from './accept-contract.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptContractPageRoutingModule {}
