import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Modal1Component } from '../pages/modal1/modal1.component';
import { Modal2Component } from '../pages/modal2/modal2.component';
import { Modal3Component } from '../pages/modal3/modal3.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'modal1',component:Modal1Component},
  {path:'modal2',component:Modal2Component},
  {path:'modal3',component:Modal3Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class DashboardRoutingModule { }