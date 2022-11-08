import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPerson } from 'src/app/models/IPerson';
import { PersonService } from 'src/app/services/person.service';
import { User } from 'src/app/models/auth/user';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  public loading : boolean = false;
  public person : IPerson = {} as IPerson;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private personService : PersonService,
              private router: Router) 
              { }

  ngOnInit(): void {
    
  }
  
  public createSubmit() 
  {
      var loggedUser = localStorage.getItem('user');
      if(loggedUser)
      {
        let inJson= JSON.parse(loggedUser);

        this.person.usersId = inJson.id;
        
        this.personService.createPerson(this.person).subscribe((data) => {
          this.router.navigate(['/']).then();
          }, (error) => {
            this.errorMessage = error;
            this.router.navigate(['/persons/add']).then();
          });
      }
  }
}
