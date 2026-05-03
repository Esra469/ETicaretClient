import { Component } from '@angular/core';
import { Base, SpinnerType } from '../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-baskets',
  standalone: false,
  templateUrl: './baskets.html',
  styleUrl: './baskets.scss',
})
export class Baskets extends Base implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
  }
}
