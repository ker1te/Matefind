import { Component, OnInit } from '@angular/core';
import { GamesService } from "../services/games.service";
import { Game } from "../core/shared/types";
import { MatDialog } from "@angular/material/dialog";
import { GameCreateModalComponent } from "./game-create-modal/game-create-modal.component";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[];

  constructor(
    public authService: AuthService,
    private gamesService: GamesService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.authService.isAdmin();
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

  public onGameClick(gameId: number) {
    console.log(gameId);
  }

  public onCreateGameClick(): void {
   this._openCreateGameModal()
  }

  private _openCreateGameModal(): void {
    const dialogRef = this.dialog.open(GameCreateModalComponent, {
      width: '70%',
      height: '80%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

}
