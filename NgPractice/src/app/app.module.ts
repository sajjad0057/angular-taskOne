import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
