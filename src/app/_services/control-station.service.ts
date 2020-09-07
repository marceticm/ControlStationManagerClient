import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ControlStation } from '../_models/control-station';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ControlStationService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getControlStations(): Observable<ControlStation[]> {
    return this.http.get<ControlStation[]>(this.baseUrl + 'ControlStations/', httpOptions);
  }

  getControlStation(id): Observable<ControlStation> {
    return this.http.get<ControlStation>(this.baseUrl + 'ControlStations/' + id, httpOptions);
  }
}
