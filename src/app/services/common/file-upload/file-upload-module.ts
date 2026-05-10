import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUpload } from './file-upload';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [FileUpload],
  imports: [CommonModule,NgxFileDropModule],
  exports:[FileUpload]
})

export class FileUploadModule {}
