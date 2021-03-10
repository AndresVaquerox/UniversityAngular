import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAssignmentSaveComponent } from './office-assignment-save.component';

describe('OfficeAssignmentSaveComponent', () => {
  let component: OfficeAssignmentSaveComponent;
  let fixture: ComponentFixture<OfficeAssignmentSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAssignmentSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAssignmentSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
