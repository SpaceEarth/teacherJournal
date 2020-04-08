import { TestBed } from '@angular/core/testing';

import { ExportGuard } from './export.guard';

describe('ExportGuard', () => {
  let guard: ExportGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExportGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
