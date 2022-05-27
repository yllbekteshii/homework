/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FindAccountService } from './find-account.service';

describe('Service: FindAccount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindAccountService]
    });
  });

  it('should ...', inject([FindAccountService], (service: FindAccountService) => {
    expect(service).toBeTruthy();
  }));
});
