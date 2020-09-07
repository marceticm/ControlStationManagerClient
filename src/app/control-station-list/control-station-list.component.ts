import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ControlStationService } from '../_services/control-station.service';
import { ControlStation } from '../_models/control-station';
import { AlertifyService } from '../_services/alertify.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-control-station-list',
  templateUrl: './control-station-list.component.html',
  styleUrls: ['./control-station-list.component.css']
})
export class ControlStationListComponent implements OnInit, AfterViewInit {
  @ViewChild('targetDataGrid', { static: false }) dataGrid: DxDataGridComponent;

  controlStations: ControlStation[];

  constructor(private stationService: ControlStationService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadControlStations();
  }

  ngAfterViewInit() {
    this.dataGrid.instance.option({
      allowColumnReordering: true,
      allowColumnResizing: true,
      columnChooser: {
        enabled: true,
        allowSearch: true,
        mode: "select",
        heigh: 400
      },
      columnAutoWidth: true,
      rowAlternationEnabled: true,
      filterRow: {
        visible: true
      },
      paging: {
        enabled: true,
        pageSize: 20
      },
      pager: {
        showPageSizeSelector: true,
        showNavigationButtons: true,
        allowedPageSizes: [5, 10, 20, 50],
        showInfo: true,
        visible: true
      },
      searchPanel: { visible: true },
      selection: {
        mode: "single"
      },
    })
  }

  loadControlStations() {
    this.stationService.getControlStations().subscribe((controlStations: ControlStation[]) => {
      this.controlStations = controlStations;
    }, error => {
      this.alertify.error(error);
    });
  }

}
