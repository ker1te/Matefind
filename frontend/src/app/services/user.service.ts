import { Injectable } from '@angular/core';
import { User } from '../shared/types';
import { USERLIST } from '../shared/userList';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERLIST;
  }

  getUserById(id: number): User {
    return USERLIST.filter(u => u.id == id)[0];
  }

}
