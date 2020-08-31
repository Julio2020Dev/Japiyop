import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestProposalPage } from './request-proposal.page';

const routes: Routes = [
  {
    path: '',
    component: RequestProposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestProposalPageRoutingModule {}
