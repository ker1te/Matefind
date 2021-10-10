import { Injectable } from '@angular/core';
import { Team, User } from '../core/shared/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../core/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient
  ) { }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(serverUrl + 'teams');
  }

  public getTeamById(teamId: number): Observable<Team> {
    return this.http.get<Team>(serverUrl + 'teams/' + teamId);
  }

  public getTeamUsers(teamId: number): Observable<User[]> {
    return this.http.get<User[]>(serverUrl + 'teams/' + teamId + '/users/')
  }

  public joinTeam(teamId: number, userId: number): Observable<any> {
    return this.http.post<any>(serverUrl + 'teams/' + teamId + '/users/' + userId, {})
  }

  public checkUserJoin(teamId: number, userId: number): Observable<{ id: number }> {
    return this.http.get<{ id: number }>(serverUrl + 'teams/' + teamId + '/users/' + userId);
  }
}
