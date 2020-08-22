import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStationComponent } from './control-station.component';

describe('ControlStationComponent', () => {
  let component: ControlStationComponent;
  let fixture: ComponentFixture<ControlStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
