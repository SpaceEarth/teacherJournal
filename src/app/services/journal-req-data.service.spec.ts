import { TestBed } from '@angular/core/testing';

import { JournalReqDataService } from './journal-req-data.service';

describe('JournalReqDataService', () => {
  let service: JournalReqDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalReqDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
