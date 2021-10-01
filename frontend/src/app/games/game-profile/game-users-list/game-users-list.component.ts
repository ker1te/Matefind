import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { User } from "../../../core/shared/types";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-game-users-list',
  templateUrl: './game-users-list.component.html',
  styleUrls: ['./game-users-list.component.scss']
})
export class GameUsersListComponent implements OnInit {
  @Input('gameId') gameId: number;

  public users: User[] = [];
  public isLoading: boolean = true;

  constructor(
      private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUsersByParams({ games: [this.gameId] })
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((users: User[]) => {
        this.users = users;
      })
  }
}
