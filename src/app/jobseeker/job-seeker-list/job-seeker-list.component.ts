import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../job-seeker.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-seeker-list',
  templateUrl: './job-seeker-list.component.html',
  styleUrls: ['./job-seeker-list.component.scss']
})
export class JobSeekerListComponent implements OnInit {

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
  deleteJobSeeker() {
    this.jobseekerService.deleteAll().catch(err => console.log(err));
  }



}
