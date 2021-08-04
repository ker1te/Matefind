import { Component, OnInit } from '@angular/core';
import {GamesService} from "../services/games.service";
import {Game} from "../shared/types";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[];

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

  onGameClick(gameId: number) {
    console.log(gameId);
  }

}
