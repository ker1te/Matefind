import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  greetingNote: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.greetingNote = this.authService.currentUserValue
      ? 'Have a nice day, ' + this.authService.currentUserValue.name + '!'
      : 'Hello! Is this your first time with us?'
  }

}
