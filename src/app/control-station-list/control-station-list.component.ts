import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-control-station-list',
  templateUrl: './control-station-list.component.html',
  styleUrls: ['./control-station-list.component.css']
})
export class ControlStationListComponent implements OnInit {
  controlStations: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getControlStations();
  }

  getControlStations() {
    this.http.get('https://localhost:44359/api/ControlStation').subscribe(response => {
      this.controlStations = response;
    }, error => {
      console.log(error);
    });
  }

}
