import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ExportComponent } from './export/export.component';
import { NotFoundComponent } from './stantalones/not-found/not-found.component';
import { OverviewComponent } from './stantalones/sidecomponents/overview/overview.component';



const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',
  loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  {path:'overview',component:OverviewComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'export',component:ExportComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
