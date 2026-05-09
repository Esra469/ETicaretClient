import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { Product } from '../../../../services/common/models/product';
import { NgxSpinnerService } from 'ngx-spinner';
import { Alertify, MessageType, Position } from '../../../../services/admin/alertify';
import { Base, SpinnerType } from '../../../../base/base';
import { error } from 'console';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List extends Base implements OnInit {
  constructor(spinner:NgxSpinnerService,private productService: Product,private alertify:Alertify) {
    super(spinner);
  }
  

 displayedColumns: string[] = ['name', 'stock', 'updatedate', 'price', 'createdate'];
 dataSource :MatTableDataSource<List_Product>=null;//veriler daha gelmedi null olabilr.
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 
 
async getProducts(){
this.showSpinner(SpinnerType.BallAtom);
  const allProducts:{totalCount:number;products:List_Product[]}= await this.productService.read(this.paginator? this.paginator.pageIndex: 0,this.paginator? this.paginator.pageSize: 5,()=>this.hideSpinner(SpinnerType.BallAtom),errorMessage=>
    this.alertify.message(errorMessage,{
      dismissOthers:true,
      messageType:MessageType.Error,
      position:Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length=allProducts.totalCount;
    //this.dataSource.paginator = this.paginator;
}

//istediğimiz aralıktaki veriler geldi. veriler bir anda hepsi gelemedi pagination sayfası ona göre optimize edildi.
async pageChanged(){
 await this.getProducts();
}

  async ngOnInit() {
    await this.getProducts();
  }

}
