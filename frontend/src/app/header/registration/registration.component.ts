import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Md5 } from 'ts-md5/dist/md5';

type formErrorsType = {
  [key: string]: string;
}

type validationMessagesType = {
  [key: string]: object;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  user: any;
  @ViewChild('fform') regFormDirective:any;

  formErrors: formErrorsType = {
    'name': '',
    'password' : '',
    /* 'repPassword': '', */
    'email': ''
  }

  validationMessages: validationMessagesType = {
    'username': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long'
    },
    'password': {
      'required': 'Password is required',
      'minlength': 'Password must be at least 5 characters long'
    },
    /* 'repPassword': {
      'required': 'Repeated password is required.'
    }, */
    'email': {
      'required': 'Email is required.'
    }
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<RegistrationComponent>
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user = this.regForm.value;
    const md5 = new Md5();
    this.user.passwordHash = md5.appendStr(this.user.password).end();
    this.user.avatar = 'cat.jpg';
    this.user.description = '';
    this.authService.register(this.user)
      .subscribe(user => {
        if(user){
          this.dialogRef.close(user);
          this.resetForm();
        }
      })
  }

  private resetForm(): void {
    this.regFormDirective.resetForm();
    this.regForm.reset({
      name: '',
      password: '',
      email: ''
    });
  }

  private createForm = () => {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      /* repPassword: ['', [Validators.required, Validators.minLength(2)]], */
      email: ['', [Validators.required]]
    })

    this.regForm.valueChanges
      .subscribe(data => this.onValueChanged(data))
  }

  private onValueChanged = (data?: any) => {
    if(!this.regForm){ return; }
    const form = this.regForm;
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid){
          const messages: any = this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
