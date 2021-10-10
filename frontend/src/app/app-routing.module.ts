import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { GamesComponent } from "./games/games.component";
import { TeamsComponent } from "./teams/teams.component";
import { PublicationsComponent } from "./publications/publications.component";
import { MessagesComponent } from "./messages/messages.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";
import { GameProfileComponent } from "./games/game-profile/game-profile.component";
import { TeamProfileComponent } from "./teams/team-profile/team-profile.component";

const routes: Routes = [
  { path: 'home', component: MainComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserProfileComponent },

  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GameProfileComponent },

  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeamProfileComponent },

  // { path: 'publications', component: PublicationsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
