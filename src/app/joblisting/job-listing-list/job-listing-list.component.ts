import { Component, OnInit } from '@angular/core';
import { JobListingService } from '../job-listing.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-job-listing-list',
  templateUrl: './job-listing-list.component.html',
  styleUrls: ['./job-listing-list.component.scss']
})
export class JobListingListComponent implements OnInit {

  joblisting: any;

  constructor(private joblistingService: JobListingService) { }

  ngOnInit() {
    this.getJobListingList();
  }

  reloadData() {
    this.joblisting = this.joblistingService.getJobListingList();
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
  deleteJobListing() {
    //this.joblistingService.deleteAll().catch(err => console.log(err));
  }

}
