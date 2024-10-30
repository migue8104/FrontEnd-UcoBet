import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private API_SERVER = "http://localhost:8081/generales/api/v1/states"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllStates(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
