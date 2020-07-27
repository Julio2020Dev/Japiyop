import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { HomePageModule } from '../home/home.module';
import { ChatPageModule } from '../chat/chat.module';
import { FavoritosPageModule } from '../favoritos/favoritos.module';

import { AboutModule } from '../about/about.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    HomePageModule,
    ChatPageModule,
    FavoritosPageModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
