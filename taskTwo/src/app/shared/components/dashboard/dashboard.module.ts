import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductModule } from 'src/app/pages/product/product.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, ProductModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
