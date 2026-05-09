import { Directive,ElementRef,HostListener,Renderer2, Input,Output, EventEmitter} from '@angular/core';

import { HttpClient } from '../../services/common/http-client';
import { Product } from '../../services/common/models/product';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialog, DeleteState } from '../../dialogs/delete-dialog/delete-dialog';
import { Alertify, MessageType, Position } from '../../services/admin/alertify';
import { HttpErrorResponse } from '@angular/common/http';



declare var $:any

@Directive({
  selector: '[appDelete]',
  standalone: false,
})
export class Delete {
  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private httpClientService:HttpClient,
    public dialog:MatDialog,
    private alertifyService:Alertify
  ) {
    const img=_renderer.createElement("img");
    img.setAttribute("src","/images/remove.png");
    img.setAttribute("style","cursor:pointer");
    img.width=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement,img);//ekleyeceğimiz chilid de ekliyoruz bu şekilde.
  }

  @Input() id:string;
  @Input() controller:string; //Dinamik olarak hangi sayfada hangi contollerda çalıştığını bulmak için yapılıyoruz. 
  @Output() callback:EventEmitter<any>=new EventEmitter();

  @HostListener("click") //bu istenen direktive ne zman tıklansa bu o zman devreye girecek demek oluyor.
 async onclick(){
  this.openDialog(async ()=>{
    const td:HTMLTableCellElement=this.element.nativeElement;
   // await this.productService.delete(this.id);
   this.httpClientService.delete({
    controller:this.controller
   },this.id).subscribe(data=>{

    $(td.parentElement).fadeOut(2000,()=>{
      this.callback.emit();
      this.alertifyService.message("Ürün Başarıyla Silinmiştir.",{
        dismissOthers:true,
        messageType:MessageType.Success,
        position:Position.TopRight
      })

    });

   },(errorResponse:HttpErrorResponse)=>{
    this.alertifyService.message("ürün silinmeye çalışılırken beklenmedik bir hata ile karşılanmıştır.",{
      dismissOthers:true,
      messageType:MessageType.Error,
      position:Position.TopRight
    })
   });
    
  })}

openDialog(afterClosed:any): void {//afterclosed bizim için bir callback fonksiyon
    const dialogRef = this.dialog.open(DeleteDialog, {
      data:DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == DeleteState.Yes) {
        afterClosed();
      }
    });
  }

}
