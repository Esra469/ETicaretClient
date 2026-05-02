import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Dashboard],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Dashboard} //dashboard diye bir şey ararsa Dashboard Handle edecek. onu bildirdik.
    ])
  ],
})
export class DashboardModule {}
