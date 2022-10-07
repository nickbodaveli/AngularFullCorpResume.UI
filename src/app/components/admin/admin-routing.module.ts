import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddPersonComponent } from '../persons/add-person/add-person.component';
import { EditPersonComponent } from '../persons/edit-person/edit-person.component';
import { MainPersonComponent } from '../persons/main-person/main-person.component';
import { PersonProfileEditComponent } from '../persons/profile/person-profile-edit/person-profile-edit.component';
import { SpecifyEducationComponent } from '../persons/profile/person-profile-edit/specify-profile-edit-pages/specify-education/specify-education.component';
import { SpecifySkillComponent } from '../persons/profile/person-profile-edit/specify-profile-edit-pages/specify-skill/specify-skill/specify-skill.component';
import { SpecifyWorkingExperienceComponent } from '../persons/profile/person-profile-edit/specify-profile-edit-pages/specify-workingExperience/specify-working-experience/specify-working-experience.component';
import { PersonProfileViewComponent } from '../persons/profile/person-profile-view/person-profile-view.component';
import { ViewPersonComponent } from '../persons/view-person/view-person.component';
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
  },
  {
    path: 'persons/view/:personId',
    component: ViewPersonComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  },
  {
    path: 'persons/add',
    component: AddPersonComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  },
  {
    path: 'persons/edit/:personId',
    component: EditPersonComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  },
  {
    path: 'persons/profile/view/:personId',
    component: PersonProfileViewComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  },
  {
    path: 'persons/profile/edit/:personId',
    component: PersonProfileEditComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  },
  {
    path: 'persons/specify-profile/skills/edit/:personId',
    component: SpecifySkillComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  },
  {
    path: 'persons/specify-profile/experiences/edit/:personId',
    component: SpecifyWorkingExperienceComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  },
  {
    path: 'persons/specify-profile/educations/edit/:personId',
    component: SpecifyEducationComponent,
    canActivate: [AuthGuard], // ==> Check that this route can be activate wich mean user you can have access
    data: { permittedRoles: ['Admin', 'User']} // These are the permitted that access this route
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
