import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JoblistingsComponent } from './joblistings/joblistings.component';
import { SignupComponent } from './signup/signup.component';
import { NewjobComponent } from './newjob/newjob.component';
import { CreateJobSeekerComponent } from './jobseeker/create-job-seeker/create-job-seeker.component';
import { JobSeekerListComponent } from './jobseeker/job-seeker-list/job-seeker-list.component';

import { CreateJobListingComponent } from './joblisting/create-job-listing/create-job-listing.component';
import { JobListingListComponent } from './joblisting/job-listing-list/job-listing-list.component';

import { CreateJobGiverComponent } from './jobgiver/create-job-giver/create-job-giver.component';
import { JobGiverListComponent } from './jobgiver/job-giver-list/job-giver-list.component';

const routes: Routes = [
  // The current routes to all of the individual pages/modules
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'joblistings', component: JoblistingsComponent },
  { path: 'newjob', component: NewjobComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'jobgiver', component: JobGiverListComponent },
  { path: 'add', component: CreateJobGiverComponent },
  { path: '**', component: HomeComponent }, // Wildcard route, all invalid inputs will route to the home page


  { path: 'jobseeker', component: JobSeekerListComponent},
  { path: 'addseeker', component: CreateJobSeekerComponent},

  { path: '', redirectTo: 'joblisting', pathMatch: 'full' },
  { path: 'joblisting', component: JobListingListComponent },
  { path: 'addlisting', component: CreateJobListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
