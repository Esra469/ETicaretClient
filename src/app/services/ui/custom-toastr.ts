//servis olarak kullanmak için oluşturduk
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CustomToastr {
  constructor(private toastr: ToastrService) {}

  message(message: string,title:string,ToastrOptions: Partial<ToastrOptions>) {
      this.toastr[ToastrOptions.messageType](message,title,{
        positionClass:ToastrOptions.position
      });
  } 
}

export class ToastrOptions{
  messageType:ToastrMessageType;
  position:ToastrPosition;
}

export enum ToastrMessageType{
  Success="success",
  Error="error",
  Warning="warning",
  Info="info"
}

export enum ToastrPosition{
  TopRight="toast-top-right",
  TopLeft="toast-top-left",
  TopCenter="toast-top-center",
  BottomRight="toast-bottom-right",
  BottomLeft="toast-bottom-left",
  BottomFullWidth="toast-bottom-full-width",
  TopFullWidth="toast-top-full-width", 
  BottomCenter="toast-bottom-center"
}