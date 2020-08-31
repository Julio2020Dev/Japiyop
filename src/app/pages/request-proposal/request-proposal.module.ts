import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestProposalPageRoutingModule } from './request-proposal-routing.module';

import { RequestProposalPage } from './request-proposal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestProposalPageRoutingModule
  ],
  declarations: [RequestProposalPage]
})
export class RequestProposalPageModule {}
