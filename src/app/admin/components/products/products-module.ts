import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Create } from './create/create';
import { List } from './list/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Delete } from '../../../directives/admin/delete';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialog } from '../../../dialogs/delete-dialog/delete-dialog';

@NgModule({
  declarations: [Products, Create, List,Delete,DeleteDialog],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: Products }, //products diye bir şey ararsa Products Handle edecek. onu bildirdik.
    ]),
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    
  ],
})
export class ProductsModule {}
