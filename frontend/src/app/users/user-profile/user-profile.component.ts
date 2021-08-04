import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userId: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userSerivce: UserService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userSerivce.getUserById(this.userId)
      .subscribe(user => {
        this.user = user;
      })
  }

  itsMe(): boolean {
    return this.authService.currentUserValue ? this.userId == this.authService.currentUserValue.id : false;
  }

}
