import { Injectable } from '@angular/core';
import { User } from '../shared/types';
import { USERLIST } from '../shared/userList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../shared/constants';

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
