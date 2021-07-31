import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/animations';
import { UserService } from '../services/user.service';
import { User } from '../shared/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[]

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  
  onUserClick(userId: number) {
    console.log(userId);
  }

}
