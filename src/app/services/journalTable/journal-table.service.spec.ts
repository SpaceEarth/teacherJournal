import { TestBed } from '@angular/core/testing';

import { JournalTableService } from './journal-table.service';

describe('JournalTableService', () => {
  let service: JournalTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
