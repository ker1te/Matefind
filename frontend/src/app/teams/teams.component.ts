import { Component, OnInit } from '@angular/core';
import { Game, Team } from "../core/shared/types";
import { FormControl } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { ModalService } from "../services/modal.service";
import { GamesService } from "../services/games.service";
import { TeamsService } from "../services/teams.service";
import { TeamProfileModalComponent } from "./team-profile-modal/team-profile-modal.component";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public searchText: string = '';
  public listIsLoading: boolean = true;

  public gamesFilterControl: FormControl = new FormControl();
  public teams: Team[] = [];
  public games: Game[] = [];

  constructor(
    private _teamsService: TeamsService,
    private _modalService: ModalService,
    private _gameService: GamesService
  ) {
    this.gamesFilterControl.setValue([]);
  }

  ngOnInit(): void {
    this._getTeamList();
    this._getGameList();
  }

  public searchTeamsByParams(): void {
    if (!this.searchText && !this.gamesFilterControl.value.length) { return; }
    this.listIsLoading = true;
    const searchParams = {
      name: this.searchText,
      games: this.gamesFilterControl.value ? this.gamesFilterControl.value : []
    }

  }

  public onClearSearch(): void {
    this.searchText = '';
    this.gamesFilterControl.setValue([]);
    this._getTeamList();
  }

  public onTeamTileClick(args: [number]): void {
    this._modalService.openDialog(TeamProfileModalComponent, { teamId: args[0] })
  }

  private _getTeamList(): void {
    this.listIsLoading = true;
    this._teamsService.getTeams().pipe(
        finalize(() => this.listIsLoading = false)
    ).subscribe((teams: Team[]) => {
      this.teams = teams;
    })
  }

  private _getGameList(): void {
    this._gameService.getGames()
    .subscribe((games: Game[]) => {
      this.games = games;
    })
  }
}
