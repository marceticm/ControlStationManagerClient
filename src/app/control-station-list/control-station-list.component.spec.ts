import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStationListComponent } from './control-station-list.component';

describe('ControlStationListComponent', () => {
  let component: ControlStationListComponent;
  let fixture: ComponentFixture<ControlStationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlStationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlStationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
