import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { Component1Component } from './dashboard/components/component1/component1.component';
import { Component2Component } from './dashboard/components/component2/component2.component';
import { Component3Component } from './dashboard/components/component3/component3.component';
import { Component4Component } from './dashboard/components/component4/component4.component';
import { Component5Component } from './dashboard/components/component5/component5.component';
import { Component6Component } from './dashboard/components/component6/component6.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { InvalidComponent } from './dashboard/components/invalid/invalid.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    HomeComponent,
    InvalidComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
