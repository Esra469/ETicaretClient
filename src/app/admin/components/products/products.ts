import { Component, ViewChild } from '@angular/core';
import { Base, SpinnerType } from '../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import { OnInit } from '@angular/core';
import { HttpClient } from '../../../services/common/http-client';
import { Product } from '../../../services/common/models/product';
import { Create_Product } from '../../../contracts/create_product';
import { List } from './list/list';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products extends Base implements OnInit {
  constructor(spinner: NgxSpinnerService ,private httpClient: HttpClient) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);



    // this.httpClient.get<Product[]>({
    //   controller: "products",
    // }).subscribe(data=>{});

    // this.httpClient.post<Product>({
    //   controller:"products"
    // },{
    //   name:"Kalem",
    //   stock:100,
    //   price:10,
    // }).subscribe();

    // this.httpClient.post({
    //   controller:"products"
    // },{
    //   name:"Kağıt",
    //   stock:1,
    //   price:15,
    // orders: []}).subscribe();


    // this.httpClient.post({
    //   controller:"products"
    // },{
    //   name:"Silgi",
    //   stock:100,
    //   price:5,
    // orders: []}).subscribe();


    // this.httpClient.post({
    //   controller:"products"
    // },{
    //   name:"Defter",
    //   stock:20,
    //   price:50,
    // orders: []}).subscribe();
    
    // this.httpClient.put({
    //   controller:"products",},{
    //   id:"35de8ad3-726e-4c43-8b8d-d399cd8cc603",
    //   name:"Renkli Kalem",
    //   stock:1500,
    //   price:12,
    // orders: []}).subscribe();

    // this.httpClient.delete({
    //   controller:"products"},
    //   "35de8ad3-726e-4c43-8b8d-d399cd8cc603").subscribe();

    }

    @ViewChild(List) listComponents:List;

    createProducts(createdProduct:Create_Product){
      this.listComponents.getProducts();
    }
  
}
