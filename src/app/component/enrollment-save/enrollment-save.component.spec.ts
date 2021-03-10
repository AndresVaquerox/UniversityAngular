import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentSaveComponent } from './enrollment-save.component';

describe('EnrollmentSaveComponent', () => {
  let component: EnrollmentSaveComponent;
  let fixture: ComponentFixture<EnrollmentSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
