import { TestBed } from '@angular/core/testing';

import { ControlStationService } from './control-station.service';

describe('ControlStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlStationService = TestBed.get(ControlStationService);
    expect(service).toBeTruthy();
  });
});
