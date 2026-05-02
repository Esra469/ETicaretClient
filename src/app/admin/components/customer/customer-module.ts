import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from './customer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Customer],
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', component: Customer} //customer diye bir şey ararsa Customer Handle edecek. onu bildirdik.

    ])
  ],
})
export class CustomerModule {}
