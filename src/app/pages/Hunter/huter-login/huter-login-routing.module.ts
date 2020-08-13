import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuterLoginPage } from './huter-login.page';

const routes: Routes = [
  {
    path: '',
    component: HuterLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuterLoginPageRoutingModule {}
