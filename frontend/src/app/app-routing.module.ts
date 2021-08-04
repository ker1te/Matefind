import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import {UserProfileComponent} from "./users/user-profile/user-profile.component";
import {GamesComponent} from "./games/games.component";
import {TeamsComponent} from "./teams/teams.component";
import {PublicationsComponent} from "./publications/publications.component";
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
  { path: 'home', component: MainComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserProfileComponent },

  { path: 'games', component: GamesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
