import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAssignmentDeleteComponent } from './office-assignment-delete.component';

describe('OfficeAssignmentDeleteComponent', () => {
  let component: OfficeAssignmentDeleteComponent;
  let fixture: ComponentFixture<OfficeAssignmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAssignmentDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAssignmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
