import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobReviewsPageRoutingModule } from './job-reviews-routing.module';

import { JobReviewsPage } from './job-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobReviewsPageRoutingModule
  ],
  declarations: [JobReviewsPage]
})
export class JobReviewsPageModule {}
