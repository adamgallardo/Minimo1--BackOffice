import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IAsignatura } from '../models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private asignaturasUrl = 'http://localhost:9090/asignaturas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAsignaturas(page: number, limit: number): Observable<any>{
    return this.http.get(`${this.asignaturasUrl}/page/${page}/${limit}`);
  }

  getAsignatura(id: string): Observable<IAsignatura> {
    const url = `${this.asignaturasUrl}/${id}`;
    return this.http.get<IAsignatura>(url)
  }

  getAsignaturasOfUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.asignaturasUrl}/user/${id}`);
}
}
