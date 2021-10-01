import { Injectable } from '@angular/core';
import { Game, User } from '../core/shared/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../core/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(serverUrl + 'users');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(serverUrl + 'users/' + id);
  }

  getUsersByParams(params: any): Observable<User[]> {
    return this.http.post<User[]>(serverUrl + 'users/findByParams/', { params })
  }

  updateUserData(userId: number, data: any): Observable<number> {
    return this.http.put<number>(serverUrl + 'users/' + userId, { data });
  }

  getUserGames(userId: number): Observable<Game[]> {
    return this.http.get<Game[]>(serverUrl + 'users/' + userId + '/games/');
  }

  addUserGame(userId: number, gameId: number): Observable<Game> {
    const data = { gameId }
    return this.http.post<Game>(serverUrl + 'users/' + userId + '/games/', { data });
  }

  deleteUserGame(userId: number, gameId: number): Observable<any> {
    return this.http.delete<any>(serverUrl + 'users/' + userId + '/games/' + gameId);
  }

}
