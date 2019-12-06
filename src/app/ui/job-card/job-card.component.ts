import { Component, OnInit, Input } from '@angular/core';
import { JobListingService } from 'src/app/joblisting/job-listing.service';
import { JobListing } from 'src/app/joblisting/joblisting';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  @Input() joblisting: any;

  constructor(private joblistingService: JobListingService) { }

  ngOnInit() {
  }

}
