import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  constructor(private $http: HttpClient) {
  }

  getVaccines() {
    return this.$http.get('/server/api/vaccine')
  }

  getVaccine(id: number) {
    return this.$http.get('/server/api/vaccine/' + id)
  }

  createVaccineRegistration(vaccine) {
    let body = JSON.stringify(vaccine);
    return this.$http.post('/server/api/vaccine', body, httpOptions)
  }

  updateVaccine(id: number, value: any): Observable<Object> {
    return this.$http.put(`/server/api/vaccine/${id}`, value);
  }

  deleteVaccine(id: number): Observable<Object> {
    return this.$http.delete(`/server/api/vaccine/${id}`)
  }

  searchVaccine(value: string): Observable<Object> {
    return value? this.$http.get(`server/api/vaccine/search-resouce/${value}`) :
      this.getVaccines()
  }
 }
