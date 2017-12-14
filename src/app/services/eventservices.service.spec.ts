import { TestBed, inject } from '@angular/core/testing';

import { EventservicesService } from './eventservices.service';

describe('EventservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventservicesService]
    });
  });

  it('should be created', inject([EventservicesService], (service: EventservicesService) => {
    expect(service).toBeTruthy();
  }));
});
