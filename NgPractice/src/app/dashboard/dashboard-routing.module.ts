import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component5Component } from './components/component5/component5.component';
import { Component6Component } from './components/component6/component6.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'component1',component:Component1Component},
  {path:'component2',component:Component2Component},
  {path:'component3',component:Component3Component},
  {path:'component4',component:Component4Component},
  {path:'component5',component:Component5Component},
  {path:'component6',component:Component6Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
