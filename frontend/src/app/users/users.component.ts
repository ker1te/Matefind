import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../core/shared/types';
import { MatDialog } from "@angular/material/dialog";
import {UserProfileModalComponent} from "./user-profile-modal/user-profile-modal.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onUserClick(userId: number) {
    this.openUserProfileDialog({ userId })
  }

  private openUserProfileDialog(data: any): void {
    const dialogRef = this.dialog.open(UserProfileModalComponent, {
      width: '70%',
      height: '80%',
      data
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
