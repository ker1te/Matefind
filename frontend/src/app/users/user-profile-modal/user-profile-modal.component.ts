import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Game, User } from "../../core/shared/types";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.scss']
})
export class UserProfileModalComponent implements OnInit {

  public userId: number;
  public user: User;
  public userGames: Game[];

  public isItMe: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { userId: number },
    @Inject('rootServerUrl') public rootServerUrl: string,
    public dialogRef: MatDialogRef<UserProfileModalComponent>,
    private userService: UserService,
    public authService: AuthService,
    private router: Router
  ) {
    this.userId = data.userId;
    this.isItMe = this.authService.currentUserValue && this.authService.currentUserValue.id === this.userId;
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId)
      .subscribe((user: User) => {
        this.user = user;
      });
    this._getUserGames(this.userId);
  }

  private _getUserGames(userId: number): void {
    this.userService.getUserGames(userId)
      .subscribe((games: Game[]) => {
        this.userGames = games
      })
  }

  public openUserPage(): void {
    this.dialogRef.close();
    this.router.navigate(['users/' + this.userId]);
  }

  public sendMessageToUser(): void {
    console.log('sendMessageToUser ' + this.userId);
  }

  public makeFriends(): void {
    console.log('makeFriends' + this.userId);
  }
}
