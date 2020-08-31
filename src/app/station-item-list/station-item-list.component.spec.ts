import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationItemListComponent } from './station-item-list.component';

describe('StationItemListComponent', () => {
  let component: StationItemListComponent;
  let fixture: ComponentFixture<StationItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
