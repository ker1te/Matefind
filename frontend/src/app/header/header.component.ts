import { Component, Inject, OnInit } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { ModalService } from "../services/modal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    public authService: AuthService,
    private router: Router,
    @Inject('rootServerUrl') public rootServerUrl: string
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
    this.modalService.openAuthDialog(SigninComponent, { regDialogOpen: this.openRegistrationDialog })
      .afterClosed().subscribe(result => {
        if(result) { if(result.regClick){ this.openRegistrationDialog() }}
      });
  }

  private openRegistrationDialog(): void {
    this.modalService.openAuthDialog(RegistrationComponent);
  }

}
