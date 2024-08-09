import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee' ;
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private API_ENDPOINT='https://twinkle-express-localgit.azurewebsites.net';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.API_ENDPOINT + '/employees')
   }

   addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_ENDPOINT + '/addEmployee', employee, httpOptions)
  }
}
