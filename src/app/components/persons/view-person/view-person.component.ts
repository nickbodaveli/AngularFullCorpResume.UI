import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson, IWorkingExperiences } from 'src/app/models/IPerson';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {

  public loading : boolean = false;
  public personId : string | null = null;
  public person : IPerson = {} as IPerson;
  public errorMessage : string | null = null;
  public isEdit : boolean = false;


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

  public addNewExperience()
  {
    if(!this.isEdit)
    {
      this.person.experiences.workingExperiences.push(<IWorkingExperiences>{experiencesId: this.person.experiences.id, name : ""});
      this.isEdit = true;
    }
  }

  public publishNewExperience()
  {
    if(this.isEdit)
    {
      this.isEdit = false;
    }
  }

  public saveInDatabase()
  {
    this.personService.updateExperience(this.person.experiences.id!, this.person.experiences.workingExperiences).subscribe();
  }

  showDoneButton(): boolean {
    if (this.isEdit) return true;

    return false;
  }

}
