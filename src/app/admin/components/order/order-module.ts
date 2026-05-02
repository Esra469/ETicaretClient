import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from './order';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Order],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Order} //order diye bir şey ararsa Order Handle edecek. onu bildirdik.
    ])
  ],
})
export class OrderModule {}
