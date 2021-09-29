import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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

  public myControl = new FormControl();
  public filteredGames: Observable<Game[]> = of([]);

  private userId: number;
  public userGames: Game[] = [
    { id: 0, description: 'asd', name: 'Over', avatar: 'cat.jpg' }
  ];
  public user: User;

  public games: Game[] = [
    { id: 0, description: 'asd', name: 'Over', avatar: 'cat.jpg' },
    { id: 1, description: 'asd', name: 'CS', avatar: 'cat.jpg' }
  ]

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private gameService: GamesService,
    private route: ActivatedRoute,
    @Inject('rootServerUrl') public rootServerUrl: string,
  ) {
    this.userId = +route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId)
      .subscribe((user: User) => {
        this.user = user;
      });
    this.initializeGameAutocomplete();
  }

  public onAutocompleteGameClick(gameId: number): void {
    const game: Game = this.games.filter(g => g.id === gameId)[0];
    this.myControl.reset('');
    this.games = this.games.filter(g => !this.userGames.includes(g));
  }

  public isItMe(): boolean {
    return this.authService.currentUserValue && this.authService.currentUserValue.id === this.userId;
  }

  public deleteUserGame(gameId: number): void {
    console.log(gameId);
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
