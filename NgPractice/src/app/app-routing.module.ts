import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidComponent } from './dashboard/components/invalid/invalid.component';


const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',
  loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  {path:'**',component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
