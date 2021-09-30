import {Component, Inject, OnInit} from '@angular/core';
import {Game, User} from "../../core/shared/types";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AuthService } from "../../services/auth.service";
import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-game-profile-modal',
  templateUrl: './game-profile-modal.component.html',
  styleUrls: ['./game-profile-modal.component.scss']
})
export class GameProfileModalComponent implements OnInit {

  public gameId: number;
  public game: Game;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: { gameId: number },
      @Inject('rootServerUrl') public rootServerUrl: string,
      private gamesService: GamesService,
      public authService: AuthService
  ) {
    this.gameId = data.gameId;
  }

  ngOnInit(): void {
    this.gamesService.getGameById(this.gameId)
      .subscribe((game: Game) => {
        this.game = game;
      })
  }

}
