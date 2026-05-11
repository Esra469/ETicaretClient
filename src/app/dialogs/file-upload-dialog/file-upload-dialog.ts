import { Component } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import {  MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-dialog',
  standalone: false,
  templateUrl: './file-upload-dialog.html',
  styleUrl: './file-upload-dialog.scss',
})

//Diyalog pencereleri olarak kullanılacak componentlerin hepsi BaseDialogdan extend edilmeilidir.
export class FileUploadDialog extends BaseDialog<FileUploadDialog> {

constructor(
  dialogRef:MatDialogRef<FileUploadDialog>, 
   @Inject(MAT_DIALOG_DATA) public data:FileUploadDialog) {
  super(dialogRef);
  
}
}

export enum FileUploadDialogState{
  Yes,No

}