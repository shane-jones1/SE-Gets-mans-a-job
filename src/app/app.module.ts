import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { JobSeekerDetailsComponent } from './jobseeker/job-seeker-details/job-seeker-details.component';
import { JobSeekerListComponent } from './jobseeker/job-seeker-list/job-seeker-list.component';
import { CreateJobSeekerComponent } from './jobseeker/create-job-seeker/create-job-seeker.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { JobListingDetailsComponent } from './joblisting/job-listing-details/job-listing-details.component';
import { JobListingListComponent } from './joblisting/job-listing-list/job-listing-list.component';
import { CreateJobListingComponent} from './joblisting/create-job-listing/create-job-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    JobSeekerDetailsComponent,
    JobSeekerListComponent,
    CreateJobSeekerComponent,
    JobListingDetailsComponent,
    JobListingListComponent,
    CreateJobListingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    LoginModule,
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
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
