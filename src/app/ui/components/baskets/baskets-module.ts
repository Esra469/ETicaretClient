import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baskets } from './baskets';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Baskets],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Baskets} //baskets diye bir şey ararsa Baskets Handle edecek. onu bildirdik.
    ])
  ],
})
export class BasketsModule {}
