import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { Game, User } from 'src/app/core/shared/types';
import { UserService } from "../../services/user.service";
import { UserProfileModalComponent } from "../user-profile-modal/user-profile-modal.component";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {
  @HostListener('click', ['$event'])
  private onClick(){
      this.modalService.openDialog(UserProfileModalComponent, { userId: this.user.id });
  }

  @Input('user') user: User;
  public userGames: string = '';
  public userGamesIsLoading: boolean = true;

  constructor(
    @Inject('rootServerUrl') public rootServerUrl: string,
    private userService: UserService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.userService.getUserGames(this.user.id)
      .subscribe((games: Game[]) => {
        this.userGames = games.map((game: Game) => game.name).join(' • ');
        this.userGamesIsLoading = false;
      });
  }

}
