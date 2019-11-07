import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGiverDetailsComponent } from './job-giver-details.component';

describe('JobGiverDetailsComponent', () => {
  let component: JobGiverDetailsComponent;
  let fixture: ComponentFixture<JobGiverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobGiverDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGiverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
