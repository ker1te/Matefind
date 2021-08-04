import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../shared/types";
import {serverUrl} from "../shared/constants";

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
}
