import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    OrderComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
})
export class ReportsModule { }
