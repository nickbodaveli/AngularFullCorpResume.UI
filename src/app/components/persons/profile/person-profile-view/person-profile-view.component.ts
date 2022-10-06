import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson, IWorkingExperiences } from 'src/app/models/IPerson';
import { ExperienceService } from 'src/app/services/experience.service';
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
  public isEdit : boolean = false;


  constructor(private activatedRoute : ActivatedRoute,
              private personService: PersonService,
              private experienceService : ExperienceService
              ) {

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
      this.person.workingExperiences.push(
        <IWorkingExperiences>
        {
          personsId: this.person.id, 
          name:'',
          description : '',
          startDate : '',
          finishDate : '',
          isPresent : ''
        });
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

  // public saveInDatabase()
  // {
  //   this.experienceService.updateExperience(this.person.id!, this.person.workingExperiences).subscribe();
  // }

  showDoneButton(): boolean {
    if (this.isEdit) return true;

    return false;
  }

}
