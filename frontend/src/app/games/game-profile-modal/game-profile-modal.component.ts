import {Component, Inject, OnInit} from '@angular/core';
import { Game } from "../../core/shared/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "../../services/auth.service";
import { GamesService } from "../../services/games.service";
import { Router } from "@angular/router";

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
      public dialogRef: MatDialogRef<GameProfileModalComponent>,
      private gamesService: GamesService,
      public authService: AuthService,
      private router: Router
  ) {
    this.gameId = data.gameId;
  }

  ngOnInit(): void {
    this.gamesService.getGameById(this.gameId)
      .subscribe((game: Game) => {
        this.game = game;
      })
  }

  public openGamePage(): void {
    this.dialogRef.close();
    this.router.navigate(['games/' + this.gameId]);
  }

}
