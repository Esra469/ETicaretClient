import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';
import { Dashboard } from './admin/components/dashboard/dashboard';
import { Home } from './ui/components/home/home';

const routes: Routes = [
  {path:"admin",component:Layout,children:[
    {path:"",component:Dashboard},//anasayfa niteliğinde. admin yazınca dashboard açılacak.

    {path:"customers",loadChildren:()=>import("./admin/components/customer/customer-module").then(module=>module.CustomerModule)},
  
    {path:"products",loadChildren:()=>import("./admin/components/products/products-module").then(module=>module.ProductsModule)},
   
    {path:"orders",loadChildren:()=>import("./admin/components/order/order-module").then(module=>module.OrderModule)}
  ]},

  {path:"",component:Home},
  {path:"baskets",loadChildren:()=>import("./ui/components/baskets/baskets-module").then(module=>module.BasketsModule)},
  {path:"products",loadChildren:()=>import("./ui/components/products/products-module").then(module=>module.ProductsModule)}
];

//nihayi rota rota olarak ekleniyor. child olanlar yani componente ait olanlar genel componente tanımlanıp nihai rota oluyor.sonra da burada çağırılacak.
//bu şekilde modüler bir yapı oluşturulmuş oluyor. bu şekilde her component kendi rotasını tanımlıyor ve biz de burada çağırarak nihayi rotayı oluşturuyoruz.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
