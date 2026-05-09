//bizim  http üzerinden yapılacak tüm isteklerin sorumluluğunu bu class yani servis üstlenecek.
import { Inject, Injectable } from '@angular/core';
import { HttpClient as AngularHttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { request } from 'http';

@Injectable({
  providedIn: 'root',
})
export class HttpClient {
  
 constructor(
    private http: AngularHttpClient, // Angular'ın servisi
    @Inject("baseUrl") private baseUrl: string
  ) {}
  
  private Createurl(requestParameter:Partial<RequestParameters>):string{
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/api/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  }

  get<T> (requestParameter:Partial<RequestParameters>,id?:string):Observable<T>{// 2 tane get olduğu için ya id var ya da yok diye işlem yapıoruz.
  let Targeturl :string = "";
  if(requestParameter.fullEndPoint)
    Targeturl=requestParameter.fullEndPoint;
  else
    Targeturl = `${this.Createurl(requestParameter)}${id ? `/${id}` : ""}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
  return this.http.get<T>(Targeturl,{headers:requestParameter.headers});
  }

  post<T> (requestParameter:Partial<RequestParameters>,body :Partial<T> ):Observable<T>{
    let targetUrl :string = "";
    if(requestParameter.fullEndPoint)
      targetUrl=requestParameter.fullEndPoint;
    else
      targetUrl=`${this.Createurl(requestParameter)}${requestParameter.queryString? `?${requestParameter.queryString}`:""} `;

    return this.http.post<T>(targetUrl,body,{headers:requestParameter.headers});
  }
  put<T>(requestParameter:Partial<RequestParameters>,body :Partial<T> ):Observable<T>{
     let targetUrl :string = "";
    if(requestParameter.fullEndPoint)
      targetUrl=requestParameter.fullEndPoint;
    else
      targetUrl=`${this.Createurl(requestParameter)}${requestParameter.queryString? `?${requestParameter.queryString}`:""}`;

    return this.http.put<T>(targetUrl,body,{headers:requestParameter.headers});
  }


  delete<T>(requestParameter:Partial<RequestParameters>,id:string):Observable<T>
  {
    let targetUrl :string = "";
    if(requestParameter.fullEndPoint)
      targetUrl=requestParameter.fullEndPoint;
    else
      targetUrl=`${this.Createurl(requestParameter)}/${id}${requestParameter.queryString? `?${requestParameter.queryString}`:""}`;

    return this.http.delete<T>(targetUrl,{headers:requestParameter.headers});
  }
}

export class RequestParameters {
  controller?: string;
  action?:string;
  queryString?: string;

  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}
