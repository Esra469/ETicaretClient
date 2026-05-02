import { Component, OnInit } from '@angular/core';


declare var alertify: any;

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  constructor() {}

  ngOnInit(): void {
     // alertify.success("başarılı");
     //this.alertify.message("başarılı", MessageType.Success,Position.TopCenter,10);//pozistyon olarak da yukarıda ortalayacak. front ksımında değişiklikleri görmek için buradan yararlandık.
  }

}
