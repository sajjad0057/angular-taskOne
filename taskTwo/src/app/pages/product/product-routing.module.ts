import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { Category3Component } from './category3/category3.component';
import { Category4Component } from './category4/category4.component';
import { Category5Component } from './category5/category5.component';
import { Category6Component } from './category6/category6.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {path:'',component:ProductComponent,
  children: [
    {path:'category1',component:Category1Component},
    {path:'category2',component:Category2Component},
    {path:'category1',component:Category1Component},
    {path:'category2',component:Category2Component},
    {path:'category3',component:Category3Component},
    {path:'category4',component:Category4Component},
    {path:'category5',component:Category5Component},
    {path:'category6',component:Category6Component},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
