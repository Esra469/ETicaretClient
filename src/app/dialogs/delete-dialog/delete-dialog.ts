import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: false,
  templateUrl: './delete-dialog.html',
  styleUrl: './delete-dialog.scss',
})
export class DeleteDialog {

  constructor(
public dialogRef:MatDialogRef<DeleteDialog>,
@Inject(MAT_DIALOG_DATA) public data:DeleteState,
  ) {}
  
  close(): void {
    this.dialogRef.close();
  }
}


export enum DeleteState{
Yes,
No
}