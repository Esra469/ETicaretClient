import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../../base/base';
import { FileUploadDialog, FileUploadDialogState } from '../../../dialogs/file-upload-dialog/file-upload-dialog';
import { Alertify, MessageType, Position } from '../../admin/alertify';
import { CustomToastr, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr';
import { Dialog } from '../dialog';
import { HttpClient } from '../http-client';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss'],
  standalone: false
})
export class FileUpload {
  constructor(
    private httpClientService: HttpClient,
    private alertifyService: Alertify,
    private customToastrService: CustomToastr,
    private dialog: MatDialog,
    private dialogService: Dialog,
    private spinner: NgxSpinnerService) { }

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }
    this.dialogService.openDialog({
      componentType: FileUploadDialog,
      data: FileUploadDialogState.Yes,
      afterClosed: () => {
        this.spinner.show(SpinnerType.BallAtom)
        this.httpClientService.post({
          controller: this.options.controller,
          action: this.options.action,
          queryString: this.options.queryString,
          headers: new HttpHeaders({ "responseType": "blob" })
        }, fileData).subscribe(data => {

          const message: string = "Dosyalar başarıyla yüklenmiştir.";

          this.spinner.hide(SpinnerType.BallAtom);
          if (this.options.isAdminPage) {
            this.alertifyService.message(message,
              {
                dismissOthers: true,
                messageType: MessageType.Success,
                position: Position.TopRight
              })
          } else {
            this.customToastrService.message(message, "Başarılı.", {
              messageType: ToastrMessageType.Success,
              position: ToastrPosition.TopRight
            })
          }


        }, (errorResponse: HttpErrorResponse) => {

          const message: string = "Dosyalar yüklenirken beklenmeyen bir hatayla karşılaşılmıştır.";

          this.spinner.hide(SpinnerType.BallAtom)
          if (this.options.isAdminPage) {
            this.alertifyService.message(message,
              {
                dismissOthers: true,
                messageType: MessageType.Error,
                position: Position.TopRight
              })
          } else {
            this.customToastrService.message(message, "Başarsız.", {
              messageType: ToastrMessageType.Error,
              position: ToastrPosition.TopRight
            })
          }

        });
      }
    });
  }

  //openDialog(afterClosed: any): void {
  //  const dialogRef = this.dialog.open(FileUploadDialogComponent, {
  //    width: '250px',
  //    data: FileUploadDialogState.Yes,
  //  });

  //  dialogRef.afterClosed().subscribe(result => {
  //    if (result == FileUploadDialogState.Yes)
  //      afterClosed();
  //  });
  //}

}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}