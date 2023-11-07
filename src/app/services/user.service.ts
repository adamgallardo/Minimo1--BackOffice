import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:27017/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(page: number, limit: number): Observable<any>{
    return this.http.get(`${this.usersUrl}/${page}/${limit}`);
  }

  getUser(id: string): Observable<IUser> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<IUser>(url)
  }

  //////// Save methods //////////

  /** PUT: update the user on the server */
  updateUser(id: string, user: any): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.put<IUser>(url, user);
  }

  //////// Delete methods //////////

  //**DELETE: delete the user on the server */
  deleteUser(id: string): Observable<IUser> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<IUser>(url);
  }
//CREATE: create a new user
  createUser(user:any): Observable<any> {
    const url = `${this.usersUrl}`;
    return this.http.post<IUser>(url,user);
  }
}
