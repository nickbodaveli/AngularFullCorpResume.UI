import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson, IWorkingExperiences } from 'src/app/models/IPerson';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { PersonService } from 'src/app/services/person.service';
import { SkillService } from 'src/app/services/skill.service';

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
              private personService: PersonService,
              private experienceService : ExperienceService,
              private educationService : EducationService,
              private skillService : SkillService

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
