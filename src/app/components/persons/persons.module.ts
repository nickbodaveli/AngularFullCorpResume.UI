import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddPersonComponent } from './add-person/add-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { PersonsRoutingModule } from './persons-routing.module';
import { MainPersonComponent } from './main-person/main-person.component';


@NgModule({
  declarations: [
    AddPersonComponent,
    EditPersonComponent,
    ViewPersonComponent,
    MainPersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PersonsModule { }
