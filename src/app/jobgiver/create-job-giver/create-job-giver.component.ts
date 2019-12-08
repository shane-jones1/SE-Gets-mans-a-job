import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JobGiver } from '../job-giver';
import { JobGiverService } from '../job-giver.service';

@Component({
  selector: 'app-create-job-giver',
  templateUrl: './create-job-giver.component.html',
  styleUrls: ['./create-job-giver.component.scss']
})
export class CreateJobGiverComponent implements OnInit {

  jobgiver: JobGiver = new JobGiver();
  submitted = false;



  constructor(private jobgiverService: JobGiverService) { }

  ngOnInit() {
  }

  newJobGiver(): void {
    this.submitted = false;
    this.jobgiver = new JobGiver();
  }

  save() {
    this.jobgiverService.createJobGiver(this.jobgiver);
    this.jobgiver = new JobGiver();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
