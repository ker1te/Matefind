import {Component, Inject, OnInit} from '@angular/core';
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SocialLink, User } from "../../core/shared/types";
import {catchError, finalize} from "rxjs/operators";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.scss']
})
export class UserProfileModalComponent implements OnInit {

  public userId: number;
  public user: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { userId: number },
    @Inject('rootServerUrl') public rootServerUrl: string,
    private userService: UserService,
    public authService: AuthService
  ) {
    this.userId = data.userId;
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId)
      .subscribe((user: User) => {
        this.user = user;
      })
  }

  itsMe(): boolean {
    return this.authService.currentUserValue ? this.userId == this.authService.currentUserValue.id : false;
  }

}
