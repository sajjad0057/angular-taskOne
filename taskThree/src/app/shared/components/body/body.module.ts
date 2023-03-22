import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { BodyComponent } from './body.component';
import { FormsModule } from '@angular/forms';
import { EventBindingExampleComponent } from 'src/app/pages/event-binding-example/event-binding-example.component';


@NgModule({
  declarations: [
    HomeComponent,
    EventBindingExampleComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    FormsModule,
  ],
  exports:[BodyComponent]
})
export class BodyModule { }
