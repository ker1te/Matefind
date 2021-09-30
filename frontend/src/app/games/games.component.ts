import { Component, OnInit } from '@angular/core';
import { GamesService } from "../services/games.service";
import { Game } from "../core/shared/types";
import { GameCreateModalComponent } from "./game-create-modal/game-create-modal.component";
import { AuthService } from "../services/auth.service";
import { ModalService } from "../services/modal.service";
import { GameProfileModalComponent } from "./game-profile-modal/game-profile-modal.component";

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
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this._getGames();
  }

  public onGameClick(gameId: number) {
    this.modalService.openDialog(GameProfileModalComponent, { gameId });
  }

  public onCreateGameClick(): void {
   this._openCreateGameModal()
  }

  private _openCreateGameModal(): void {
    this.modalService.openDialog(GameCreateModalComponent)
      .afterClosed().subscribe(() => this._getGames());
  }

  private _getGames(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

}
