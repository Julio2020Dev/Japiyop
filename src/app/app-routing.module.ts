import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'select-account',
    loadChildren: () => import('./Modal/select-account/select-account.module').then( m => m.SelectAccountPageModule)
  },
  {
    path: 'confirm-profile',
    loadChildren: () => import('./pages/confirm-profile/confirm-profile.module').then( m => m.ConfirmProfilePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'job-details',
    loadChildren: () => import('./pages/job-details/job-details.module').then( m => m.JobDetailsPageModule)
  },
  {
    path: 'job-reviews',
    loadChildren: () => import('./pages/job-reviews/job-reviews.module').then( m => m.JobReviewsPageModule)
  },
  {
    path: 'job-request',
    loadChildren: () => import('./pages/job-request/job-request.module').then( m => m.JobRequestPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'push',
    loadChildren: () => import('./pages/push/push.module').then( m => m.PushPageModule)
  },
  {
    path: 'push-details',
    loadChildren: () => import('./pages/push-details/push-details.module').then( m => m.PushDetailsPageModule)
  },
  {
    path: 'push-list',
    loadChildren: () => import('./pages/push-list/push-list.module').then( m => m.PushListPageModule)
  },
  {
    path: 'hunter-details',
    loadChildren: () => import('./pages/hunter-details/hunter-details.module').then( m => m.HunterDetailsPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./pages/request/request.module').then( m => m.RequestPageModule)
  },
   
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
