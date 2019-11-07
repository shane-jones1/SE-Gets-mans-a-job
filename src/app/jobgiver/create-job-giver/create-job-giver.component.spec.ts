import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobGiverComponent } from './create-job-giver.component';

describe('CreateJobGiverComponent', () => {
  let component: CreateJobGiverComponent;
  let fixture: ComponentFixture<CreateJobGiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJobGiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
