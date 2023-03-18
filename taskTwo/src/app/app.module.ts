import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Sidebar1Component } from './shared/components/sidebar1/sidebar1.component';
import { Sidebar2Component } from './shared/components/sidebar2/sidebar2.component';
import { Modal1Component } from './pages/modal1/modal1.component';
import { Modal2Component } from './pages/modal2/modal2.component';
import { Modal3Component } from './pages/modal3/modal3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    Sidebar1Component,
    Sidebar2Component,
    Modal1Component,
    Modal2Component,
    Modal3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
