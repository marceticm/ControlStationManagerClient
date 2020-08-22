import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-control-station',
  templateUrl: './control-station.component.html',
  styleUrls: ['./control-station.component.css']
})
export class ControlStationComponent implements OnInit {
  controlStations: any;

  constructor(private http:HttpClient) { }

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
