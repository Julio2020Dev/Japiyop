import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HunterChatPageRoutingModule } from './hunter-chat-routing.module';

import { HunterChatPage } from './hunter-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HunterChatPageRoutingModule
  ],
  declarations: [HunterChatPage]
})
export class HunterChatPageModule {}
