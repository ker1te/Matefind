import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../core/shared/types';
import { UserProfileModalComponent } from "./user-profile-modal/user-profile-modal.component";
import { ModalService } from "../services/modal.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onUserClick(userId: number) {
    this.openUserProfileDialog({ userId })
  }

  private openUserProfileDialog(data: any): void {
    this.modalService.openDialog(UserProfileModalComponent, data);
  }

}
