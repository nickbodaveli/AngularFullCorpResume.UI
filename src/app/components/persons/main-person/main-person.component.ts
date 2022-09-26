import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/models/IPerson';
import { AuthService } from 'src/app/services/auth.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-main-person',
  templateUrl: './main-person.component.html',
  styleUrls: ['./main-person.component.css']
})
export class MainPersonComponent implements OnInit {

  public loading: boolean = false;
  public persons: IPerson[] = [];
  public errorMessage: string | null = null;


  constructor(private personService : PersonService, private authService : AuthService) { }

  ngOnInit(): void {
    this.getAllPersonsFromServer();
  }

  public getAllPersonsFromServer()
  {
    this.loading = true;
    this.personService.getAllPersons().subscribe((data) => {
      console.log(data);
      this.persons = data;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false;
    });
  }

  public deletePerson(personId : string | undefined)
  {
    if(personId)
    {
      this.personService.deletePerson(personId).subscribe((data) => {
        this.getAllPersonsFromServer();
      }, (error) => {
        this.errorMessage = error;
      })
    }
  }

  
  logout(){
    return this.authService.logout();
  }

}
