import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { JobListing } from './joblisting';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  private dbPath = '/joblisting';
  joblistingRef: AngularFireList<JobListing> = null;

  constructor(private db: AngularFireDatabase) {
    this.joblistingRef = db.list(this.dbPath);
   }
   createJobListing(joblisting: JobListing): void {
    this.joblistingRef.push(joblisting);
  }
  updateJobListing(key: string, value: any): Promise<void> {
    return this.joblistingRef.update(key, value);
  }
  deleteJobListing(key: string): Promise<void> {
    return this.joblistingRef.remove(key);
  }
  getJobListingList(): AngularFireList<JobListing> {
    return this.joblistingRef;
  }
  deleteAll(): Promise<void> {
    return this.joblistingRef.remove();
  }
}
