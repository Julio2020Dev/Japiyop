import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HunterDetailsPageRoutingModule } from './hunter-details-routing.module';
import { HunterDetailsPage } from './hunter-details.page';
import { ComponentsModule } from '../../components/components.module';
import { CommentModalComponent } from '../../components/comment-modal/comment-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HunterDetailsPageRoutingModule
  ],
  declarations: [HunterDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class HunterDetailsPageModule {}
