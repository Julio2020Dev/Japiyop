import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignHomePage } from './sign-home.page';

const routes: Routes = [
  {
    path: '',
    component: SignHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignHomePageRoutingModule {}
