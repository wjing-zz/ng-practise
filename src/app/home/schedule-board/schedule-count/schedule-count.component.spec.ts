import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCountComponent } from './schedule-count.component';

describe('ScheduleCountComponent', () => {
  let component: ScheduleCountComponent;
  let fixture: ComponentFixture<ScheduleCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
