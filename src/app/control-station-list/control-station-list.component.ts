import { Component, OnInit } from '@angular/core';
import { ControlStationService } from '../_services/control-station.service';
import { ControlStation } from '../_models/control-station';
import { AlertifyService } from '../_services/alertify.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-control-station-list',
  templateUrl: './control-station-list.component.html',
  styleUrls: ['./control-station-list.component.css']
})
export class ControlStationListComponent implements OnInit {
  controlStations: ControlStation[];
  dataGrid: DxDataGridComponent;

  constructor(private stationService: ControlStationService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadControlStations();
  }

  loadControlStations() {
    this.stationService.getControlStations().subscribe((controlStations: ControlStation[]) => {
      this.controlStations = controlStations;
    }, error => {
      this.alertify.error(error);
    });
  }

}
