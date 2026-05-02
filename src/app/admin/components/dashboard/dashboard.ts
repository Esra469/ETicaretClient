import { Component ,OnInit} from '@angular/core';
import { Alertify, MessageType, Position } from '../../../services/admin/alertify';



@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard  implements OnInit {
constructor( private alertify: Alertify) {}

 ngOnInit(): void {
     // alertify.success("başarılı");
     //this.alertify.message("başarılı", MessageType.Success,Position.TopCenter,10);//pozistyon olarak da yukarıda ortalayacak. front ksımında değişiklikleri görmek için buradan yararlandık.
  }

  m(){
    this.alertify.message("başarılı",{
      messageType:MessageType.Success,
      position:Position.TopRight,
      delay:5,
      dismissOthers:true
    });
  }
  d(){
    this.alertify.dissmiss();
  }
} 
