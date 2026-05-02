import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Products],
  imports: [
    CommonModule,
  RouterModule.forChild([ 
  {path: '', component: Products} //products diye bir şey ararsa Products Handle edecek. onu bildirdik.
  ])
  ],
})
export class ProductsModule {}
