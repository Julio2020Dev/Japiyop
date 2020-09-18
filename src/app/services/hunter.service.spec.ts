import { TestBed } from '@angular/core/testing';

import { HunterService } from './hunter.service';

describe('HunterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HunterService = TestBed.get(HunterService);
    expect(service).toBeTruthy();
  });
});
