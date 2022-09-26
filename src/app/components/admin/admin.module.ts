import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MainPersonComponent } from '../persons/main-person/main-person.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
      data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
    },
    {
      path: 'persons',
      component: MainPersonComponent,
      canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
      data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
      DashboardComponent,
      // MainPersonComponent
    ]
  })
  export class AdminModule { }