import { Component, EventEmitter ,Output} from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../../../services/common/models/product';
import { Create_Product } from '../../../../contracts/create_product';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../../base/base';
import { Alertify, MessageType, Position } from '../../../../services/admin/alertify';
import { error } from 'console';
import { FileUploadOptions } from '../../../../services/common/file-upload/file-upload';



@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create extends Base implements OnInit {
  constructor(spinner: NgxSpinnerService, private productService: Product,private alertify:Alertify) {
    super(spinner);
  }



  ngOnInit(): void {
}

@Output() createdProduct:EventEmitter<Create_Product>=new EventEmitter();
@Output() FileUploadOptions:Partial<FileUploadOptions>={//OUTPUT olarak işaretledik çünkü bu vermiş olduğumuz dışarıya gidecek
  action:"upload",
  controller:"products",
  explanation:"Resimleri sürükleyn veya seçin",
  isAdminPage:true,
  accept:".png, .jpg"

} ;

create (name:HTMLInputElement, stock:HTMLInputElement, price:HTMLInputElement) {

  this.showSpinner(SpinnerType.BallAtom);
  const create_product :Create_Product=new Create_Product();
  create_product.name = name.value;
  create_product.stock = parseInt(stock.value);
  create_product.price = parseFloat(price.value);
  

  this.productService.create(create_product,()=>{
    this.hideSpinner(SpinnerType.BallAtom);
    this.alertify.message("Ürün başarıyla oluşturuldu.",{
      dismissOthers:true,
      messageType:MessageType.Success,
      position:Position.TopRight
    });

    this.createdProduct.emit(create_product);

  },(errorMessage)=>{
    this.alertify.message(errorMessage,{
      dismissOthers:true,
      messageType:MessageType.Error,
      position:Position.TopRight
    });
  });
}
}

