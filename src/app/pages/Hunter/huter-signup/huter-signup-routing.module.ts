import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuterSignupPage } from './huter-signup.page';

const routes: Routes = [
  {
    path: '',
    component: HuterSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuterSignupPageRoutingModule {}
