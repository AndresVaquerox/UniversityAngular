import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstructorSaveComponent } from './course-instructor-save.component';

describe('CourseInstructorSaveComponent', () => {
  let component: CourseInstructorSaveComponent;
  let fixture: ComponentFixture<CourseInstructorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInstructorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInstructorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
