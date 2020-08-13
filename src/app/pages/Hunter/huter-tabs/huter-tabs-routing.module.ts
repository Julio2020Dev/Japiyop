import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuterTabsPage } from './huter-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: HuterTabsPage,
    children:[
      {
        path: 'huter-home',
        loadChildren: () => import('../huter-home/huter-home.module').then( m => m.HuterHomePageModule)
      },
      {
        path: 'huterchat',
        loadChildren: () => import('../huterchat/huterchat.module').then( m => m.HuterchatPageModule)
      },
      {
        path: 'huter-profile',
        children:[
          {
            path: 'huter-profile',
            loadChildren: () => import('../huter-profile/huter-profile.module').then( m => m.HuterProfilePageModule)
          }
          
        ]
        
      },
      {
        path: 'huter-signup',
        loadChildren: () => import('../huter-signup/huter-signup.module').then( m => m.HuterSignupPageModule)
      },
      {
        path: 'huter-login',
        loadChildren: () => import('../huter-login/huter-login.module').then( m => m.HuterLoginPageModule)
      },
      {
        path: 'huter',
        loadChildren: () => import('../huter/huter.module').then( m => m.HuterPageModule)
      },
      {
        path: '',
        redirectTo: '/hunter/tabs/hunter',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuterTabsPageRoutingModule {}
