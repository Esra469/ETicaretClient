import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root',
})
export class Alertify {
  constructor() {}
 // message(message: string,messageType: MessageType, position: Position,delay:number=3,dismissOthers:boolean=false) {
  message(message: string,options: Partial<AlertifyOptions>) { //partial ile AlertifyOptions içindeki istediğimiz parametreleri kullanabileceğiz. bu sayede istediğimiz parametreleri tek tek yazmak yerine options üzerinden çağırarak kullanabileceğiz.
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
   const msj= alertify[options.messageType](message);//hangi member varsa ona karşılık gelip durum döndürecek. mesela messageTyp
    // e success ise alertify.success() çalışacak. messageType error ise alertify.error() çalışacak.
    if(options.dismissOthers){
      msj.dismissOthers();
    }

}
dissmiss() {
      alertify.dismissAll();
    }
}

//parametre ayarları için burayı enum diye belirtiyoruz. böylece parametrelerimizi tek tek yazmak yerine enum üzerinden çağırarak kullanabileceğiz. bu da bize kolaylık sağlayacak.
export enum MessageType {
  Success="success",
  Error="error",
  Warning="warning",
  Message="message",
  Notify="notify"
}

export enum Position {
  TopCenter="top-center",
  TopLeft="top-left",
  TopRight="top-right",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left",
  BottomRight="bottom-right"

}

export class AlertifyOptions{
messageType:MessageType=MessageType.Message; //default değerlerini verdik
position:Position=Position.TopCenter;
delay:number=3;
dismissOthers:boolean=false;
}