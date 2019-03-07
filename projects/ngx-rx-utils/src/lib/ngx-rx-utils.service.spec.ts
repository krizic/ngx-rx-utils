import { TestBed } from '@angular/core/testing';

import { NgxRxUtilsService } from './ngx-rx-utils.service';

describe('NgxRxUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRxUtilsService = TestBed.get(NgxRxUtilsService);
    expect(service).toBeTruthy();
  });
});
