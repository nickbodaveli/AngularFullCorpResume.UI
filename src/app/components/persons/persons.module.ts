import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddPersonComponent } from './add-person/add-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { PersonsRoutingModule } from './persons-routing.module';
import { MainPersonComponent } from './main-person/main-person.component';
import { PersonProfileViewComponent } from './profile/person-profile-view/person-profile-view.component';
import { PersonProfileEditComponent } from './profile/person-profile-edit/person-profile-edit.component';


@NgModule({
  declarations: [
    AddPersonComponent,
    EditPersonComponent,
    ViewPersonComponent,
    MainPersonComponent,
    PersonProfileViewComponent,
    PersonProfileEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PersonsModule { }
