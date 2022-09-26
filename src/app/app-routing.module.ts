import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/persons/add-person/add-person.component';
import { EditPersonComponent } from './components/persons/edit-person/edit-person.component';
import { MainPersonComponent } from './components/persons/main-person/main-person.component';
import { ViewPersonComponent } from './components/persons/view-person/view-person.component';



const routes : Routes = [
    // {path: '', redirectTo: 'persons', pathMatch: 'full'},
    // {path: 'persons', component: MainPersonComponent},
    // {path: 'persons/add', component: AddPersonComponent},
    // {path: 'persons/view/:personId', component: ViewPersonComponent},
    // {path: 'persons/edit/:personId', component: EditPersonComponent},

      {
        path: '',
        loadChildren: () => import('../app/components/admin/admin.module').then(x => x.AdminModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('../app/components/auth/auth.module').then(x => x.AuthModule)
      },
      {
        path: 'persons',
        loadChildren: () => import('../app/components/persons/persons.module').then(x => x.PersonsModule)
      },

    // {path: '**', component: PageNotFoundComponent}
    // {path: 'persons', component: MainComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }