import { TestBed } from '@angular/core/testing';

import { OfficeAssignmentService } from './office-assignment.service';

describe('OfficeAssignmentService', () => {
  let service: OfficeAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
