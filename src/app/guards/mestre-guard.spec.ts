import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mestreGuard } from './mestre-guard';

describe('mestreGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => mestreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
