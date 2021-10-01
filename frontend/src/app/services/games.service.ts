import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../core/shared/types";
import { serverUrl } from "../core/shared/constants";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(serverUrl + 'games');
  }

  getGameById(gameId: number): Observable<Game> {
    return this.http.get<Game>(serverUrl + 'games/' + gameId);
  }

  getGamesByName(name: string): Observable<Game[]> {
    const data = { name };
    return this.http.post<Game[]>(serverUrl + 'games/findByName', { data });
  }

  createGame(game: any): Observable<Game> {
    const body = { data: { ...game } };
    return this.http.post<Game>(serverUrl + 'games', body);
  }
}
