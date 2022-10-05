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
import { SpecifySkillComponent } from './profile/person-profile-edit/specify-profile-edit-pages/specify-skill/specify-skill/specify-skill.component';


@NgModule({
  declarations: [
    AddPersonComponent,
    EditPersonComponent,
    ViewPersonComponent,
    MainPersonComponent,
    PersonProfileViewComponent,
    PersonProfileEditComponent,
    SpecifySkillComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PersonsModule { }
