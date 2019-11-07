import { Component, OnInit, Input } from '@angular/core';
import { JobListingService } from '../job-listing.service';
import { JobListing } from '../joblisting';


@Component({
  selector: 'app-job-listing-details',
  templateUrl: './job-listing-details.component.html',
  styleUrls: ['./job-listing-details.component.scss']
})
export class JobListingDetailsComponent implements OnInit {

  @Input() joblisting: JobListing;

  constructor(private joblistingService: JobListingService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.joblistingService
      .updateJobListing(this.joblisting.key, { active: isActive })
      .catch(err => console.log(err));
  }
  deleteJobListing() {
    this.joblistingService
      .deleteJobListing(this.joblisting.key)
      .catch(err => console.log(err));
  }
}
