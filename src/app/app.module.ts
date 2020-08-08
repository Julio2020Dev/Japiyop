import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { SelectAccountPage } from './Modal/select-account/select-account.page';
import { ComponentsModule } from './components/components.module';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import { RequestModalComponent } from './components/request-modal/request-modal.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  entryComponents: [
    CommentModalComponent,
    RequestModalComponent
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar],
  bootstrap: [AppComponent]
})
export class AppModule {}
