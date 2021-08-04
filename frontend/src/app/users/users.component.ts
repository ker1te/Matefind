import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../shared/types';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onUserClick(userId: number) {
    this.router.navigate(['users', userId])
  }

}
