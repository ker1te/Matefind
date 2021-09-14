import { Component, Inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/shared/types';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {

  @Input('user') user: User;
  userGames: string;

  constructor(
    @Inject('rootServerUrl') public rootServerUrl: string
  ) { }

  ngOnInit(): void {
    this.userGames = this.user.games.map(g => g.name).join(' · ');
  }

}
