import { Component, OnInit, Input } from '@angular/core';
import { JobGiverService } from '../job-giver.service';
import { JobGiver } from '../job-giver';


@Component({
  selector: 'app-job-giver-details',
  templateUrl: './job-giver-details.component.html',
  styleUrls: ['./job-giver-details.component.scss']
})


export class JobGiverDetailsComponent implements OnInit {

  @Input() jobgiver: JobGiver;

  constructor(private jobgiverService: JobGiverService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.jobgiverService
      .updateJobGiver(this.jobgiver.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteJobGiver() {
    this.jobgiverService
      .deleteJobGiver(this.jobgiver.key)
      .catch(err => console.log(err));
  }

}
