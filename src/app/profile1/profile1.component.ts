import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../jobseeker/job-seeker.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})
export class Profile1Component implements OnInit {

  jobseeker: any;

  constructor(private jobseekerService: JobSeekerService) { }

  ngOnInit() {
    this.getJobSeekerList();
  }
  getJobSeekerList() {
    this.jobseekerService.getJobSeekerList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(jobseeker => {
      this.jobseeker = jobseeker;
    });
  }
}
