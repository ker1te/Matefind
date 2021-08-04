import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {AuthService} from "../../services/auth.service";
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = {name: "", password: "", passwordHash: "", remember: false}

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<SigninComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const md5 = new Md5();
    this.user.passwordHash = md5.appendStr(this.user.password).end().toString();
    this.authService.signin(this.user)
      .subscribe(user => {
        if (user) {
          this.dialogRef.close(user)
        }
      })
  }

  onRegistrationClick(): void {
    this.dialogRef.close({ regClick: true })
  }

}
