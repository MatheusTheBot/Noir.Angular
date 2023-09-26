import { TestBed } from '@angular/core/testing';

import { VisitantService } from './visitant.service';

describe('VisitantService', () => {
  let service: VisitantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
