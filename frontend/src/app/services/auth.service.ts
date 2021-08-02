import { Injectable } from '@angular/core';
import { User } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: User;

  constructor() {
    this.currentUserSubject = new User();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject;
  }

  signin(username: string, pasword: string) {
    //todo: SignIn function
  }

  register(username: string, password: string) {
    //todo: Register function
  }
  
}
