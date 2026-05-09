import { Directive,ElementRef,HostListener,Renderer2, Input,Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../services/common/models/product';



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
    private productService:Product
  ) {
    const img=_renderer.createElement("img");
    img.setAttribute("src","/images/remove.png");
    img.setAttribute("style","cursor:pointer");
    img.width=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement,img);//ekleyeceğimiz chilid de ekliyoruz bu şekilde.
  }

  @Input() id:string;
  @Output() callback:EventEmitter<any>=new EventEmitter();

  @HostListener("click") //bu istenen direktive ne zman tıklansa bu o zman devreye girecek demek oluyor.
 async onclick(){
    const td:HTMLTableCellElement=this.element.nativeElement;
   await this.productService.delete(this.id);
    $(td.parentElement).fadeOut(2000,()=>{
      this.callback.emit();
    });
  }
}
