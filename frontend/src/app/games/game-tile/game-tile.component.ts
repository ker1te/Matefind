import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { Game } from "../../core/shared/types";
import { GameProfileModalComponent } from "../game-profile-modal/game-profile-modal.component";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  @HostListener('click', ['$event'])
  onClick(){
    this.modalService.openDialog(GameProfileModalComponent, { gameId: this.game.id });
  }
  @Input('game') game: Game;

  constructor(
      @Inject('rootServerUrl') public rootServerUrl: string,
      private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

}
