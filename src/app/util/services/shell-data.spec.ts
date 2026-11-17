import { TestBed } from '@angular/core/testing';

import { ShellData } from './shell-data';

describe('ShellData', () => {
  let service: ShellData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
