import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = {username: "", password: "", remember: false}

  constructor(
    public dialogRef: MatDialogRef<SigninComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  onRegistrationClick(): void {
    this.dialogRef.close({ regClick: true })
  }

}
