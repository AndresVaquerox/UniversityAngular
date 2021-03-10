import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstructorDeleteComponent } from './course-instructor-delete.component';

describe('CourseInstructorDeleteComponent', () => {
  let component: CourseInstructorDeleteComponent;
  let fixture: ComponentFixture<CourseInstructorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInstructorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInstructorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
