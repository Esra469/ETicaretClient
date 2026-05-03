//servis olarak kullanmak için oluşturduk
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CustomToastr {
  constructor(private toastr: ToastrService,@Inject(PLATFORM_ID) private platformId: Object) {}

  message(message: string,title:string,ToastrOptions: Partial<ToastrOptions>) {
    
     if (isPlatformBrowser(this.platformId)) {
      this.toastr[ToastrOptions.messageType](message, title, {
        positionClass: ToastrOptions.position
      });
    }
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