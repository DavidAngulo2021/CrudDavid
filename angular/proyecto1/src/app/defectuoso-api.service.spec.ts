import { TestBed } from '@angular/core/testing';

import { DefectuosoApiService } from './defectuoso-api.service';

describe('DefectuosoApiService', () => {
  let service: DefectuosoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefectuosoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
