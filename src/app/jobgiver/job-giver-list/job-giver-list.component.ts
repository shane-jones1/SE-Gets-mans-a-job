import { Component, OnInit } from '@angular/core';
import { JobGiverService } from '../job-giver.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-giver-list',
  templateUrl: './job-giver-list.component.html',
  styleUrls: ['./job-giver-list.component.scss']
})

export class JobGiverListComponent implements OnInit {

  jobgiver: any;

  constructor(private jobgiverService: JobGiverService) { }

  ngOnInit() {
    this.getJobGiverList();
  }
  getJobGiverList() {
    this.jobgiverService.getJobGiverList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(jobgiver => {
      this.jobgiver = jobgiver;
    });
  }

  deleteJobGiver() {
    this.jobgiverService.deleteAll().catch(err => console.log(err));
  }


}
