import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEducations, IPerson, IWorkingExperiences } from 'src/app/models/IPerson';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { PersonService } from 'src/app/services/person.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-person-profile-edit',
  templateUrl: './person-profile-edit.component.html',
  styleUrls: ['./person-profile-edit.component.css']
})
export class PersonProfileEditComponent implements OnInit {

  public loading : boolean = false;
  public personId : string | null = null;
  public person : IPerson = {} as IPerson;
  public errorMessage : string | null = null;
  public isEditEducation : boolean = false;
  public isEditExperience : boolean = false;


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
      console.log(this.person);
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
    if(!this.isEditExperience)
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
      this.isEditExperience = true;
    }
  }

  public addNewEducation()
  {
    if(!this.isEditEducation)
    {
      this.person.workingExperiences.push(
        <IEducations>
        {
          personsId: this.person.id, 
          name:'',
          description : '',
          startDate : '',
          finishDate : '',
          isPresent : ''
        });
      this.isEditEducation = true;
    }
  }

  public publishNewExperience()
  {
    if(this.isEditExperience)
    {
      this.isEditExperience = false;
    }
  }

  public publishNewEducation()
  {
    if(this.isEditEducation)
    {
      this.isEditEducation = false;
    }
  }

  public saveExperience()
  {
    this.experienceService.updateExperience(this.person.id!, this.person.workingExperiences).subscribe();
  }

  public saveEducation()
  {
    this.educationService.updateEducation(this.person.id!, this.person.workingExperiences).subscribe();
  }

  showExperienceDoneButton(): boolean {
    if (this.isEditExperience) return true;

    return false;
  }

  showEducationDoneButton(): boolean {
    if (this.isEditEducation) return true;

    return false;
  }

}
