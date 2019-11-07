import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { JobSeeker } from './jobseeker';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  private dbPath = '/jobseeker';
  jobseekerRef: AngularFireList<JobSeeker> = null;

  constructor(private db: AngularFireDatabase) {
    this.jobseekerRef = db.list(this.dbPath);
  }

  createJobSeeker(jobseeker: JobSeeker): void {
    this.jobseekerRef.push(jobseeker);
  }

  updateJobSeeker(key: string, value: any): Promise<void> {
    return this.jobseekerRef.update(key, value);
  }

  deleteJobSeeker(key: string): Promise<void> {
    return this.jobseekerRef.remove(key);
  }

  getJobSeekerList(): AngularFireList<JobSeeker> {
    return this.jobseekerRef;
  }

  deleteAll(): Promise<void> {
    return this.jobseekerRef.remove();
  }
}
