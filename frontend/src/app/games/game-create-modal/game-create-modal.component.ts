import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { GamesService } from "../../services/games.service";

type formErrorsType = {
  [key: string]: string;
}

type validationMessagesType = {
  [key: string]: object;
}

@Component({
  selector: 'app-game-create-modal',
  templateUrl: './game-create-modal.component.html',
  styleUrls: ['./game-create-modal.component.scss']
})
export class GameCreateModalComponent implements OnInit {

  public createForm: FormGroup;
  public game: any;
  @ViewChild('fform') createFormDirective:any;

  formErrors: formErrorsType = {
    'name': '',
    'description' : ''
  }

  validationMessages: validationMessagesType = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long'
    },
    'description': {
      'required': 'Description is required'
    }
  };

  constructor(
    private fb: FormBuilder,
    private gameService: GamesService,
    public dialogRef: MatDialogRef<GameCreateModalComponent>
  ) { }

  ngOnInit(): void {
    this._createForm();
  }

  public onSubmit(): void {
    this.game = this.createForm.value;
    this.game.avatar = 'cat.jpg';
    this.gameService.createGame(this.game)
      .subscribe((game) => {
        if (game) {
          this.dialogRef.close()
        }
      })
  }

  private _createForm = () => {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      description: ['', [Validators.required]]
    })

    this.createForm.valueChanges
      .subscribe(data => this._onValueChanged(data))
  }

  private _onValueChanged = (data?: any) => {
    if(!this.createForm){ return; }
    const form = this.createForm;
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
