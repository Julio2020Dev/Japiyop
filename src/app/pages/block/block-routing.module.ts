import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockPage } from './block.page';

const routes: Routes = [
  {
    path: '',
    component: BlockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockPageRoutingModule {}
