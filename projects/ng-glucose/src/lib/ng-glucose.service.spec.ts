import { TestBed } from '@angular/core/testing';

import { NgGlucoseService } from './ng-glucose.service';

describe('NgGlucoseService', () => {
  let service: NgGlucoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGlucoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
