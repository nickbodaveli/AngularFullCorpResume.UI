import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainPersonComponent } from './components/persons/main-person/main-person.component';
import { AddPersonComponent } from './components/persons/add-person/add-person.component';
import { EditPersonComponent } from './components/persons/edit-person/edit-person.component';
import { ViewPersonComponent } from './components/persons/view-person/view-person.component';

import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // AddPersonComponent,
    // EditPersonComponent,
    // ViewPersonComponent,
    // MainPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name:'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
