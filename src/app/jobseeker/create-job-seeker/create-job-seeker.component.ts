import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobSeeker } from '../jobseeker';
import { JobSeekerService } from '../job-seeker.service';

@Component({
  selector: 'app-create-job-seeker',
  templateUrl: './create-job-seeker.component.html',
  styleUrls: ['./create-job-seeker.component.scss']
})
export class CreateJobSeekerComponent implements OnInit {

  jobseeker: JobSeeker = new JobSeeker();
  submitted = false;
  constructor(private jobseekerService: JobSeekerService) { }

  ngOnInit() {
  }

  newJobSeeker(): void {
    this.submitted = false;
    this.jobseeker = new JobSeeker();
  }

  save() {
    this.jobseekerService.createJobSeeker(this.jobseeker);
    this.jobseeker = new JobSeeker();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
