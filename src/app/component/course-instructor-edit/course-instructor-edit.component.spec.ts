import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstructorEditComponent } from './course-instructor-edit.component';

describe('CourseInstructorEditComponent', () => {
  let component: CourseInstructorEditComponent;
  let fixture: ComponentFixture<CourseInstructorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInstructorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInstructorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
