import { Component, Inject, OnInit } from '@angular/core';
import {Team, User} from "../../core/shared/types";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { TeamsService } from "../../services/teams.service";

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss']
})
export class TeamProfileComponent implements OnInit {

  public team: Team;
  public teamId: number;

  public teamUsers: User[] = [];

  constructor(
      private authService: AuthService,
      private userService: UserService,
      private teamsService: TeamsService,
      private route: ActivatedRoute,
      @Inject('rootServerUrl') public rootServerUrl: string,
  ) {
    this.teamId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._getTeam();
    this._getTeamUsers();
  }

  private _getTeam(): void {
    this.teamsService.getTeamById(this.teamId)
      .subscribe((team: Team) => {
        this.team = team;
      })
  }

  private _getTeamUsers(): void {
    this.teamsService.getTeamUsers(this.teamId)
      .subscribe((users: User[]) => {
        this.teamUsers = users;
      })
  }

}
