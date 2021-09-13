import { Component, OnInit } from '@angular/core';
import { Section } from '../core/shared/types';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
