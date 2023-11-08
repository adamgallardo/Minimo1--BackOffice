import { Injectable } from '@angular/core';
import { IValoration } from '../models/valoration';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValorationService {

  private valorationsUrl = 'http://localhost:27017/valoration';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {  }

  getValorations(page: number, limit: number): Observable<any>{
    return this.http.get(`${this.valorationsUrl}/${page}/${limit}`);
  }
  deleteValoration(id: string): Observable<IValoration> {
    const url = `${this.valorationsUrl}/${id}`;
    return this.http.delete<IValoration>(url);
  }
  getValoration(id: string): Observable<IValoration> {
    const url = `${this.valorationsUrl}/${id}`;
    return this.http.get<IValoration>(url)
  }
  updateValoration(id: string, valoration: any): Observable<any> {
    const url = `${this.valorationsUrl}/${id}`;
    return this.http.put<IValoration>(url, valoration);
  }
}
