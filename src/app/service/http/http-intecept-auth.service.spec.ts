import { TestBed } from '@angular/core/testing';

import { HttpInteceptAuthService } from './http-intecept-auth.service';

describe('HttpInteceptAuthService', () => {
  let service: HttpInteceptAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInteceptAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
