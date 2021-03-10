import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstructorListComponent } from './course-instructor-list.component';

describe('CourseInstructorListComponent', () => {
  let component: CourseInstructorListComponent;
  let fixture: ComponentFixture<CourseInstructorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInstructorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInstructorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
