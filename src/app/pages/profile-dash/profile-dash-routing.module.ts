import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDashPage } from './profile-dash.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDashPageRoutingModule {}
