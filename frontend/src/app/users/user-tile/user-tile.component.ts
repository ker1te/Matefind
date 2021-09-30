import { Component, Inject, Input, OnInit } from '@angular/core';
import { Game, User } from 'src/app/core/shared/types';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {

  @Input('user') user: User;
  public userGames: string = '';
  public userGamesIsLoading: boolean = true;

  constructor(
    @Inject('rootServerUrl') public rootServerUrl: string,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserGames(this.user.id)
      .subscribe((games: Game[]) => {
        this.userGames = games.map((game: Game) => game.name).join(' • ');
        this.userGamesIsLoading = false;
      });
  }

}
