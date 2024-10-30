import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private API_SERVER = "http://localhost:8081/generales/api/v1/cities"

  constructor(
    private httpClient: HttpClient
  ) { }

  public saveCity(city:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,city);
  }

}
