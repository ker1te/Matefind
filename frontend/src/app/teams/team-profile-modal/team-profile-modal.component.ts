import {Component, Inject, OnInit} from '@angular/core';
import { Team } from "../../core/shared/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { TeamsService } from "../../services/teams.service";
import {finalize, map, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-team-profile-modal',
  templateUrl: './team-profile-modal.component.html',
  styleUrls: ['./team-profile-modal.component.scss']
})
export class TeamProfileModalComponent implements OnInit {

  public teamId: number;
  public team: Team;
  public isLoading: boolean = true;

  public isJoined: boolean = false;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: { teamId: number },
      @Inject('rootServerUrl') public rootServerUrl: string,
      public dialogRef: MatDialogRef<TeamProfileModalComponent>,
      public authService: AuthService,
      private _teamsService: TeamsService,
      private _router: Router
  ) {
    this.teamId = data.teamId;
  }

  ngOnInit(): void {
    this._teamsService.getTeamById(this.teamId).pipe(
        finalize(() => this.isLoading = false)
    ).subscribe((team: Team) => {
      this.team = team;
      this._checkUserJoin();
    })
  }

  private _checkUserJoin(): void {
    this._teamsService.checkUserJoin(this.teamId, this.authService.currentUserValue.id)
      .subscribe((response: any) => {
          this.isJoined = !!response;
      })
  }

  public onOpenPage(): void {
    this.dialogRef.close();
    this._router.navigate(['teams/', this.teamId]);
  }

  public onJoin(): void {
    this._teamsService.joinTeam(this.teamId, this.authService.currentUserValue.id)
      .subscribe((response: number) => {
        this.isJoined = !!response;
      })
  }

}
