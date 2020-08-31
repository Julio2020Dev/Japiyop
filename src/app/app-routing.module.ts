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
  {
    path: 'chatroom',
    loadChildren: () => import('./pages/chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'profile-dash',
    loadChildren: () => import('./pages/profile-dash/profile-dash.module').then( m => m.ProfileDashPageModule)
  },
  {
    path: 'general',
    loadChildren: () => import('./pages/general/general.module').then( m => m.GeneralPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'show-me',
    loadChildren: () => import('./pages/show-me/show-me.module').then( m => m.ShowMEPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'addpayment',
    loadChildren: () => import('./pages/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
  },
  {
    path: 'ask',
    loadChildren: () => import('./pages/ask/ask.module').then( m => m.AskPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'block',
    loadChildren: () => import('./pages/block/block.module').then( m => m.BlockPageModule)
  },
  {
    path: 'weekreview',
    loadChildren: () => import('./pages/weekreview/weekreview.module').then( m => m.WeekreviewPageModule)
  },
  {
    path: 'hunter-home',
    loadChildren: () => import('./pages/Hunter/hunter-home/hunter-home.module').then( m => m.HunterHomePageModule)
  },
  {
    path: 'hunter-filter',
    loadChildren: () => import('./pages/Hunter/hunter-filter/hunter-filter.module').then( m => m.HunterFilterPageModule)
  },
  {
    path: 'hunter-chat',
    loadChildren: () => import('./pages/Hunter/hunter-chat/hunter-chat.module').then( m => m.HunterChatPageModule)
  },
  {
    path: 'hunter-profile',
    loadChildren: () => import('./pages/Hunter/hunter-profile/hunter-profile.module').then( m => m.HunterProfilePageModule)
  },
  {
    path: 'hunterequest',
    loadChildren: () => import('./pages/Hunter/hunterequest/hunterequest.module').then( m => m.HunterequestPageModule)
  },
  {
    path: 'request-profile',
    loadChildren: () => import('./pages/Hunter/request-profile/request-profile.module').then( m => m.RequestProfilePageModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import('./pages/Hunter/experiences/experiences.module').then( m => m.ExperiencesPageModule)
  },
  {
    path: 'request-proposal',
    loadChildren: () => import('./pages/request-proposal/request-proposal.module').then( m => m.RequestProposalPageModule)
  },
  {
    path: 'accept-contract',
    loadChildren: () => import('./pages/accept-contract/accept-contract.module').then( m => m.AcceptContractPageModule)
  },
  {
    path: 'confirmpayment',
    loadChildren: () => import('./pages/confirmpayment/confirmpayment.module').then( m => m.ConfirmpaymentPageModule)
  },
      
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
