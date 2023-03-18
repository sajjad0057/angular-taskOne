import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { BodyComponent } from '../shared/components/body/body.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
