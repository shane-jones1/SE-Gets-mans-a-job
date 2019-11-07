import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGiverListComponent } from './job-giver-list.component';

describe('JobGiverListComponent', () => {
  let component: JobGiverListComponent;
  let fixture: ComponentFixture<JobGiverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobGiverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGiverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
