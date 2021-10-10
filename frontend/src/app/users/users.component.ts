import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Game, User } from '../core/shared/types';
import { ModalService } from "../services/modal.service";
import { finalize } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { GamesService } from "../services/games.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public searchText: string = '';
  public listIsLoading: boolean = true;

  public gamesFilterControl: FormControl = new FormControl();
  public games: Game[] = [];


  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private gameService: GamesService
  ) {
    this.gamesFilterControl.setValue([]);
  }

  ngOnInit(): void {
    this._getUserList();
    this._getGameList();
  }

  public searchUsersByParams(): void {
    if (!this.searchText && !this.gamesFilterControl.value.length) { return; }
    this.listIsLoading = true;
    const searchParams = {
      name: this.searchText,
      games: this.gamesFilterControl.value ? this.gamesFilterControl.value : []
    }
    this.userService.getUsersByParams(searchParams)
      .pipe(
        finalize(() => this.listIsLoading = false)
      )
      .subscribe((users: User[]) => {
        this.users = users;
      })
  }

  public onClearSearch(): void {
    this.searchText = '';
    this.gamesFilterControl.setValue([]);
    this._getUserList();
  }

  private _getUserList(): void {
    this.listIsLoading = true;
    this.userService.getUsers()
    .pipe(
        finalize(() => this.listIsLoading = false)
    )
    .subscribe(users => this.users = users);
  }

  private _getGameList(): void {
    this.gameService.getGames()
    .subscribe((games: Game[]) => {
      this.games = games;
    })
  }
}
