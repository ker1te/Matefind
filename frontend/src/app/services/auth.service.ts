import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverUrl } from '../shared/constants';
import { User } from '../shared/types';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: any;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new User();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject;
  }

  signin(username: string, pasword: string) {
    //todo: SignIn function
  }

  register(user: any): Observable<User> {
    const body = { data: { ...user } }
    return  this.http.post<User>(serverUrl + 'users',  body)
      .pipe(map(user => this.currentUserSubject = user))
  }

}
