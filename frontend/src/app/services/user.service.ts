import { Injectable } from '@angular/core';
import { User } from '../core/shared/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../core/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(serverUrl + 'users');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(serverUrl + 'users/' + id);
  }

}
