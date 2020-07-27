import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobRequestPage } from './job-request.page';

const routes: Routes = [
  {
    path: '',
    component: JobRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRequestPageRoutingModule {}
