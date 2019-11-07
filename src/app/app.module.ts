import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './ui/angular-material/angular-material.module';
import { LoginModule } from './login/login.module';
import { JoblistingsModule } from './joblistings/joblistings.module';
import { NewjobModule } from './newjob/newjob.module';
import { SignupModule } from './signup/signup.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { JobGiverDetailsComponent } from './jobgiver/job-giver-details/job-giver-details.component';
import { CreateJobGiverComponent } from './jobgiver/create-job-giver/create-job-giver.component';
import { JobGiverListComponent } from './jobgiver/job-giver-list/job-giver-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobGiverDetailsComponent,
    JobGiverListComponent,
    CreateJobGiverComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    JoblistingsModule,
    NewjobModule,
    SignupModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
