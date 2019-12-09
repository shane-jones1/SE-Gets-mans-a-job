import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { JobGiver } from './job-giver';

@Injectable({
  providedIn: 'root'
})


export class JobGiverService {


  private dbPath = '/job-giver';

  jobgiverRef: AngularFireList<JobGiver> = null;

  constructor(private db: AngularFireDatabase) {
    this.jobgiverRef = db.list(this.dbPath);
  }

  createJobGiver(jobgiver: JobGiver): void {
    this.jobgiverRef.push(jobgiver);
  }

  updateJobGiver(key: string, value: any): Promise<void> {
    return this.jobgiverRef.update(key, value);
  }

  deleteJobGiver(key: string): Promise<void> {
    return this.jobgiverRef.remove(key);
  }

  getJobGiverList(): AngularFireList<JobGiver> {
    return this.jobgiverRef;
  }

  deleteAll(): Promise<void> {
    return this.jobgiverRef.remove();
  }

}
