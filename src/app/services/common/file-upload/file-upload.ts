import { Component,Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient } from '../http-client';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';
import { Alertify, MessageType, Position } from '../../admin/alertify';
import { CustomToastr, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
})
export class FileUpload { 
  constructor(private httpClientService:HttpClient,
    private alertifyService:Alertify,
    private customService:CustomToastr){}//bunun sayesinde istek göndereceğiz

  public files: NgxFileDropEntry[] = [];

  @Input() options:Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData:FormData=new FormData();
    for(const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        fileData.append(_file.name,_file,file.relativePath);
      });
    }

    //bu yapının body ve istek(subscribe kısımlarını iyi incele)
 this.httpClientService.post({
  controller:this.options.controller,
  action:this.options.action,
  queryString:this.options.queryString,
  headers:new HttpHeaders({"responseType":"blob"})
 },fileData).subscribe(data=>{

  const message:string="Dosyalar Başarıyla Yüklenmiştir."
  if(this.options.isAdminPage){
      this.alertifyService.message(message,{
        dismissOthers:true,
        messageType:MessageType.Success,
        position:Position.TopRight
      })
  }else{
      this.customService.message(message,"Başarılı",{
          messageType:ToastrMessageType.Success,
          position:ToastrPosition.TopRight
      })
  }

 },(errorResponse:HttpErrorResponse)=>{

const message:string="Dosyalar Yüklenirlen Beklenmedik Bir Hata ile Karşılaşıldı."
  if(this.options.isAdminPage){
      this.alertifyService.message(message,{
        dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      })
  }else{
      this.customService.message(message,"Başarısız",{
          messageType:ToastrMessageType.Error,
          position:ToastrPosition.TopRight
      })
  }

 });  
  }
} 



//Bu component neye göre çalışacaksa alınna verya gönderilen verilerin yapısını belirleyecek
export class FileUploadOptions{
  controller?:string;
  action?:string;
  queryString?:string;
  explanation?:string;
  accept?:string;
  isAdminPage?:boolean=false;
}