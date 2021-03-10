import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAssignmentListComponent } from './office-assignment-list.component';

describe('OfficeAssignmentListComponent', () => {
  let component: OfficeAssignmentListComponent;
  let fixture: ComponentFixture<OfficeAssignmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAssignmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAssignmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
