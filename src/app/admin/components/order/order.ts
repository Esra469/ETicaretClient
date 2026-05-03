import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order extends Base implements OnInit{
  constructor (spinner: NgxSpinnerService,) { 
    super(spinner);
    
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
  }
}
