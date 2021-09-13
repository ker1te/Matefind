import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, of} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import {Game, User} from "../../core/shared/types";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
import { FormControl } from "@angular/forms";
import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public myControl = new FormControl();
  public filteredGames: Observable<Game[]>;

  private userId: number;
  public user: User;

  public games: Game[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private gameService: GamesService,
    private route: ActivatedRoute
  ) {
    this.userId = +route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId)
      .subscribe((user: User) => {
        this.user = user;
      });
    this.gameService.getGames()
      .subscribe((games: Game[]) => {
        this.games = games;
        this.initializeGameAutocomplete();
      });
  }

  public onAutocompleteGameClick(gameId: number): void {
    const game: Game = this.games.filter(g => g.id === gameId)[0];
    this.user.games.push(game);
    this.myControl.reset();
    this.filteredGames = of(this.games.filter(g => !this.user.games.includes(g)));
  }

  public isItMe(): boolean {
    return this.authService.currentUserValue && this.authService.currentUserValue.id === this.userId;
  }

  private initializeGameAutocomplete(): void {
    this.filteredGames = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Game[] {
    const filterValue = value.toLowerCase();
    return this.games.filter(game => game.name.toLowerCase().includes(filterValue));
  }

}
