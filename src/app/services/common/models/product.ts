import { Injectable } from '@angular/core';
import { HttpClient } from '../../../services/common/http-client';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
//product işlemleri gerçekleştireceğimiz product servisi.
export class Product {
  
  constructor(private httpClient: HttpClient) {}

// create(product: Create_Product,successCallBack?: any,errorCallback?: any) {
//  this.httpClient.post({
//   controller: 'products'
//  },product)
//  .subscribe(result => {
  
//   successCallBack();
//  },
//   (errorResponse:HttpErrorResponse)=>{
//     const _error:Array<{key:string,value:Array<string>}>=errorResponse.error;
//     let message = "";
//     _error.forEach((v,index)=>{
//       v.value.forEach((_v,_index)=>{
//         message+=`${_v}<br>`;
//       });
//     });
//     errorCallback(message);
//   });
//  }

// }

create(product: Create_Product, successCallBack?: any, errorCallback?: any) {
  this.httpClient.post({
    controller: 'products'
  }, product)
    .subscribe({
      next: (result) => {
        if (successCallBack) successCallBack();
      },
      error: (errorResponse: HttpErrorResponse) => {
        const _errors = errorResponse.error; // Backend'den gelen hata nesnesi
        let message = "";

        // Eğer backend FluentValidation hatalarını bir nesne içinde dönüyorsa:
        if (_errors && typeof _errors === 'object') {
          Object.keys(_errors).forEach(key => {
            // Hatalar dizi olarak geliyorsa iç içe dönebiliriz
            const errorValues = _errors[key];
            if (Array.isArray(errorValues)) {
              errorValues.forEach(errorMessage => {
                message += `${errorMessage}<br>`;
              });
            } else {
              message += `${errorValues}<br>`;
            }
          });
        } else {
          message = "Beklenmedik bir hata oluştu.";
        }

        if (errorCallback) errorCallback(message);
      }
    });
}
}