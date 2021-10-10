import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverUrl } from '../core/shared/constants';
import { User } from '../core/shared/types';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: User;

  constructor(
    private http: HttpClient
  ) {

  }

  public get currentUserValue(): User {
    return this.currentUserSubject;
  }

  public set description(desc: string) {
    this.currentUserSubject.description = desc;
  }

  public signin(userData: any): Observable<User> {
    const body = { data: { ...userData } }
    return this.http.post<User>(serverUrl + 'users/signIn', body)
      .pipe(map(user => this.currentUserSubject = user))
  }

  public register(userData: any): Observable<User> {
    const body = { data: { ...userData } }
    return this.http.post<User>(serverUrl + 'users',  body)
      .pipe(map(user => this.currentUserSubject = user))
  }

  public isAdmin(): boolean {
    return this.currentUserSubject && this.currentUserSubject.isAdmin;
  }

  public isAuth(): boolean {
    return !!this.currentUserSubject;
  }

}
