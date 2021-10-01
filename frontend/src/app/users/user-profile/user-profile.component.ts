import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import { Game, User } from "../../core/shared/types";
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

  public autoCompleteControl = new FormControl();
  public descriptionControl = new FormControl();
  public filteredGames: Observable<Game[]> = of([]);
  public saveDescriptionButtonDisable: boolean = true;

  public user: User;
  private userId: number;
  public userGames: Game[] = [];

  public games: Game[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private gameService: GamesService,
    private route: ActivatedRoute,
    @Inject('rootServerUrl') public rootServerUrl: string,
  ) {
    this.userId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId)
      .subscribe((user: User) => {
        this.user = user;
      });
    this.userService.getUserGames(this.userId)
      .subscribe((userGames: Game[]) => {
        this.userGames = userGames;
        this._getGames();
      })

    this.initializeDescriptionControl();
  }

  public onSaveDescriptionClick(): void {
    this.userService.updateUserData(this.userId, { description: this.descriptionControl.value })
        .subscribe((userUpdated: number) => {
          if (userUpdated) {
            this.authService.description = this.descriptionControl.value;
            this.user.description = this.descriptionControl.value;
            this.descriptionControl.setValue(this.user.description);
          }
        })
  }

  public onAutocompleteGameClick(gameId: number): void {
    const game: Game = this.games.filter(g => g.id === gameId)[0];
    this.userService.addUserGame(this.userId, game.id)
      .subscribe((game: Game) => {
        this.userGames.push(game);
        this.autoCompleteControl.reset('');
        this._getGames()
      })
  }

  public isItMe(): boolean {
    return this.authService.currentUserValue && this.authService.currentUserValue.id === this.userId;
  }

  public deleteUserGame(gameId: number): void {
    this.userService.deleteUserGame(this.userId, gameId)
      .subscribe((deletedGameId: number) => {
        if (deletedGameId) {
          this.userGames = this.userGames.filter((game: Game) => game.id !== gameId);
        }
        this._getGames();
      });
  }

  private initializeGameAutocomplete(): void {
    this.filteredGames = this.autoCompleteControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private initializeDescriptionControl(): void {
    this.descriptionControl.valueChanges.pipe(
        tap((value: string) => this.saveDescriptionButtonDisable = this.user.description === value.toString())
    ).subscribe()
  }

  private _filter(value: string): Game[] {
    const filterValue = value.toLowerCase();
    return this.games.filter(game => game.name.toLowerCase().includes(filterValue));
  }

  private _getGames(): void {
    this.gameService.getGames()
      .subscribe((games: Game[]) => {
        this.games = games.filter(g => !this.userGames.map((ug: Game) => ug.id).includes(g.id));
        this.initializeGameAutocomplete();
      })
  }

}
