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
import { FormsModule } from '@angular/forms';
import { Toast } from '@ionic-native/toast/ngx';

import { ComponentsModule } from './components/components.module';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import { RequestModalComponent } from './components/request-modal/request-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
// import { LinkedIn } from '@ionic-native/linkedin';

import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OverlayModule } from "@angular/cdk/overlay";

import { CallNumber } from '@ionic-native/call-number/ngx';
@NgModule({ 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatSnackBarModule,
    BrowserAnimationsModule,
    OverlayModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  entryComponents: [
    CommentModalComponent,
    RequestModalComponent,
    DeleteModalComponent,
    DialogComponent
  ],
  declarations: [AppComponent],
  providers: [
    InAppBrowser, 
    SplashScreen, 
    StatusBar, 
    Toast, 
    GooglePlus,
    CallNumber,
    Facebook,
    OverlayModule,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
