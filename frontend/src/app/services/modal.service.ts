import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalConfig: any = {
    width: '60%',
    height: '70%',
  }

  private authModalConfig: any = {
    width: '450px',
    height: '450px'
  }

  constructor(
      private dialog: MatDialog
  ) { }

  public openDialog(component: any, data?: any): MatDialogRef<typeof component, any> {
    return this.dialog.open(component, { ...this.modalConfig, data });
  }

  public openAuthDialog(component: any, data?: any): MatDialogRef<typeof component, any> {
    return this.dialog.open(component, { ...this.authModalConfig, data })
  }

}
