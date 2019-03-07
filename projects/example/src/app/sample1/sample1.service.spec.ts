/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Sample1Service } from './sample1.service';

describe('Service: Sample1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sample1Service]
    });
  });

  it('should ...', inject([Sample1Service], (service: Sample1Service) => {
    expect(service).toBeTruthy();
  }));
});
