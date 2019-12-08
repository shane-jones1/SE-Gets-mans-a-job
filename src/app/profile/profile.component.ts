import { Component, OnInit, Input } from '@angular/core';
import { JobGiver } from '../jobgiver/job-giver';
import { JobGiverService } from '../jobgiver/job-giver.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() jobgiver: JobGiver;

  constructor(private jobgiverService: JobGiverService) { }

  ngOnInit() {
    this.getJobGiverList();
  }

  updateActive(isActive: boolean) {
    this.jobgiverService
      .updateJobGiver(this.jobgiver.key, { active: isActive })
      .catch(err => console.log(err));
  }

  getJobGiverList() {
    this.jobgiverService.getJobGiverList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(jobgiver => {
      jobgiver = jobgiver;
    });
  }
}
