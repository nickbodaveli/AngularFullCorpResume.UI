import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPerson } from 'src/app/models/IPerson';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-profile-edit',
  templateUrl: './person-profile-edit.component.html',
  styleUrls: ['./person-profile-edit.component.css']
})
export class PersonProfileEditComponent implements OnInit {

  public loading : boolean = false;
  public personId: string | null = null;
  public person : IPerson = {} as IPerson;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private personService : PersonService,
              private router : Router)
              { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.personId = param.get('personId');
    });
    if(this.personId)
    {
      this.personService.getPerson(this.personId).subscribe((data) => {
        this.person = data;
        this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }

  public submitUpdate()
  {
    if(this.personId)
    {
      this.personService.updatePerson(this.person, this.personId).subscribe((data) => {
        this.router.navigate(['/']).then();
      }, (error) => {
        this.errorMessage = error;
        this.router.navigate([`/persons/edit/${this.personId}`]).then();
      });
    }
  }

}
