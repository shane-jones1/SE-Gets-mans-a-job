import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { NewjobComponent } from './newjob/newjob.component';
import { CreateJobSeekerComponent } from './jobseeker/create-job-seeker/create-job-seeker.component';
import { JobSeekerListComponent } from './jobseeker/job-seeker-list/job-seeker-list.component';

import { CreateJobListingComponent } from './joblisting/create-job-listing/create-job-listing.component';
import { JobListingListComponent } from './joblisting/job-listing-list/job-listing-list.component';

import { CreateJobGiverComponent } from './jobgiver/create-job-giver/create-job-giver.component';
import { JobGiverListComponent } from './jobgiver/job-giver-list/job-giver-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // The current routes to all of the individual pages/modules
  { path: '', component: HomeComponent }, // Home Page
  { path: 'home', component: HomeComponent }, // Navigate To Home Page with specific url tag
  { path: 'login', component: LoginComponent }, // Login Page
  //{ path: 'joblistings', component: JoblistingsComponent },
  { path: 'signup', component: SignupComponent }, // Sign Up
  { path: 'addseeker', component: CreateJobSeekerComponent}, // Add job seeker account
  // view jobs page


  { path: 'addgiver', component: CreateJobGiverComponent }, // add job giver account
  { path: 'newjob', component: CreateJobListingComponent }, // Add New Job Listing


  { path: 'jobgiver', component: JobGiverListComponent },


  { path: '**', component: HomeComponent }, // Wildcard route, all invalid inputs will route to the home page


  { path: 'jobseeker', component: JobSeekerListComponent},


  { path: 'joblisting', component: JobListingListComponent },
  { path: '', redirectTo: 'joblisting', pathMatch: 'full' },
  { path: 'addlisting', component: CreateJobListingComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '**', component: HomeComponent }, // Wildcard route, all invalid inputs will route to the home page
  //{ path: 'addlisting', component: CreateJobListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
