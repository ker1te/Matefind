import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlComponent } from './control/control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { UserTileComponent } from './users/user-tile/user-tile.component';
import { UserService } from './services/user.service';
import { HighlightDirective } from './directives/highlight.directive';
import { LastNewsComponent } from './main/last-news/last-news.component';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlComponent,
    MainComponent,
    UsersComponent,
    UserTileComponent,
    HighlightDirective,
    LastNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    UserService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
