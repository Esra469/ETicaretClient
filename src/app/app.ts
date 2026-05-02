//import { Component, signal } from '@angular/core';
import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CustomToastr, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('ETicaretClient');
  constructor(private customToastr: CustomToastr,@Inject(PLATFORM_ID) private platformId: Object) {
    customToastr.message("Başarılı","Başlık",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopRight 
    });
    customToastr.message("Başarılı","Başlık",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopLeft
    });
    customToastr.message("Başarılı","Başlık",{
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopCenter
    });
    customToastr.message("Başarılı","Başlık",{
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.BottomRight
    });

  }

  

  ngOnInit() {
    // Sadece tarayıcı ortamında çalışmasını sağla
    if (isPlatformBrowser(this.platformId)) {
      $(document).ready(() => {
        //alert("Jquery çalışıyor");
      });
      
}
}
}