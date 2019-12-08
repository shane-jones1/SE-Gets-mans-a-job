import { Component, OnInit, Input } from '@angular/core';
import {JobSeekerService } from '../job-seeker.service';
import { JobSeeker } from '../jobseeker';

@Component({
  selector: 'app-job-seeker-details',
  templateUrl: './job-seeker-details.component.html',
  styleUrls: ['./job-seeker-details.component.scss']
})
export class JobSeekerDetailsComponent implements OnInit {

  @Input() jobseeker: JobSeeker;
  constructor(private jobseekerService: JobSeekerService) { }


  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.jobseekerService
      .updateJobSeeker(this.jobseeker.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteJobSeeker() {
    this.jobseekerService
      .deleteJobSeeker(this.jobseeker.key)
      .catch(err => console.log(err));
  }

}
