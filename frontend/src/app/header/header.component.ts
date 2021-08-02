import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSignInClick(): void {
    this.openSignInDialog();
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
      if(result.regClick){ this.openRegistrationDialog() }
    });
  }

  private openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '450px',
      height: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
