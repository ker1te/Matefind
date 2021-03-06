import { Component, Inject, Input, OnInit } from '@angular/core';
import { Game } from "../../core/shared/types";

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  @Input('game') game: Game;

  constructor(
      @Inject('rootServerUrl') public rootServerUrl: string
  ) { }

  ngOnInit(): void {
  }

}
