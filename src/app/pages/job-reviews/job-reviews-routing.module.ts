import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobReviewsPage } from './job-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: JobReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobReviewsPageRoutingModule {}
