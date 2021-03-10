import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSaveComponent } from './instructor-save.component';

describe('InstructorSaveComponent', () => {
  let component: InstructorSaveComponent;
  let fixture: ComponentFixture<InstructorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
