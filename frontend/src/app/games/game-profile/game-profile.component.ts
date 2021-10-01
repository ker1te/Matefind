import {Component, Inject, OnInit} from '@angular/core';
import { Game } from "../../core/shared/types";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { GamesService } from "../../services/games.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.scss']
})
export class GameProfileComponent implements OnInit {

  public game: Game;
  public gameId: number;

  constructor(
      private authService: AuthService,
      private userService: UserService,
      private gameService: GamesService,
      private route: ActivatedRoute,
      @Inject('rootServerUrl') public rootServerUrl: string,
  ) {
    this.gameId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._getGame();
  }

  private _getGame(): void {
    this.gameService.getGameById(this.gameId)
      .subscribe((game: Game) => {
        this.game = game;
      })
  }

}
