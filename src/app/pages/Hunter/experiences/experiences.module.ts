import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencesPageRoutingModule } from './experiences-routing.module';

import { ExperiencesPage } from './experiences.page';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExperiencesPageRoutingModule
  ],
  declarations: [ExperiencesPage]
})
export class ExperiencesPageModule {}
