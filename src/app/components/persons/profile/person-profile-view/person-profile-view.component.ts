import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from 'src/app/models/IPerson';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-profile-view',
  templateUrl: './person-profile-view.component.html',
  styleUrls: ['./person-profile-view.component.css']
})
export class PersonProfileViewComponent implements OnInit {

  
  public loading : boolean = false;
  public personId : string | null = null;
  public person : IPerson = {} as IPerson;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private personService: PersonService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.personId = param.get('personId');
    });

    if(this.personId)
    {
      this.loading = true;
      this.personService.getPerson(this.personId).subscribe((data) => {
      this.person = data;
      this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      });
    }
  }

  public isNotEmpty() 
  {
    return Object.keys(this.person).length > 0;
  }

}
