import { Component } from '@angular/core';
import { Base, SpinnerType } from '../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
})
export class Customer  extends Base  implements OnInit { //base ettiğimiz için extends ile base i çağırdık. alt tarafta da constructor ekleyip base e göndermemiz gerekiyor. java gibi.
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    //buradan base ait şeyleri alabilceeğiz
    this.showSpinner(SpinnerType.BallAtom);
  }
} 
