import { Component, OnInit, Input } from '@angular/core';
import { JobListingService } from 'src/app/joblisting/job-listing.service';
import { JobListing } from 'src/app/joblisting/joblisting';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-card',
  template: `
  <div class="job-card">
    <p>{{ joblisting.name }}</p>
    <p>{{ joblisting.email }}</p>
  </div>
`,
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {

  joblisting: any;

  constructor(private joblistingService: JobListingService) { }

  ngOnInit() {
    this.getJobListingList();
  }

  getJobListingList() {
    this.joblistingService.getJobListingList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(joblisting => {
      this.joblisting = joblisting;
    });
  }

}
