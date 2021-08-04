import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignInClick(): void {
    this.openSignInDialog();
  }

  onUserClick(): void {
    this.router.navigate(['users', this.authService.currentUserValue.id]);
  }

  private openSignInDialog(): void {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '450px',
      height: '400px',
      data: {
        regDialogOpen: this.openRegistrationDialog
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) { if(result.regClick){ this.openRegistrationDialog() }}
    });
  }

  private openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '450px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {  });
  }

}
