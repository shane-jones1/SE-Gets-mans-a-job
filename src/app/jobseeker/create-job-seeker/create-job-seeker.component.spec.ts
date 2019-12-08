import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobSeekerComponent } from './create-job-seeker.component';

describe('CreateJobSeekerComponent', () => {
  let component: CreateJobSeekerComponent;
  let fixture: ComponentFixture<CreateJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
