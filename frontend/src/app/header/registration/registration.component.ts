import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user = {username: "", password: "", repPassword: "", email: ""}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}

}
