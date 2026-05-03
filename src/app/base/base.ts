import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class Base {
 constructor(private spinner: NgxSpinnerService) {}
 
showSpinner(spinnerNameType:SpinnerType){
  this.spinner.show(spinnerNameType);

  setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.hideSpinner(spinnerNameType);
    }   , 1000);
}
hideSpinner(spinnerNameType:SpinnerType){
  this.spinner.hide(spinnerNameType);
}
}

export enum SpinnerType{
  BallScaleMultiple="s2",
  BallAtom="s1",
  BallSpinClockwiseFadeRotating="s3"
}