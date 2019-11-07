import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobListing } from '../joblisting';
import { JobListingService } from '../job-listing.service';

@Component({
  selector: 'app-create-job-listing',
  templateUrl: './create-job-listing.component.html',
  styleUrls: ['./create-job-listing.component.scss']
})
export class CreateJobListingComponent implements OnInit {

  joblisting: JobListing = new JobListing();
  submitted = false;

  constructor(private joblistingService: JobListingService) { }

  ngOnInit() {
  }

  newJobListing(): void {
    this.submitted = false;
    this.joblisting = new JobListing();
  }
  save() {
    this.joblistingService.createJobListing(this.joblisting);
    this.joblisting = new JobListing();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
