import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {path:'',component:ReportsComponent},
  {path:'order',component:OrderComponent},
  {path:'customer',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
