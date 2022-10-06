import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPerson, IWorkingExperiences } from 'src/app/models/IPerson';
import { ExperienceService } from 'src/app/services/experience.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-specify-working-experience',
  templateUrl: './specify-working-experience.component.html',
  styleUrls: ['./specify-working-experience.component.css']
})
export class SpecifyWorkingExperienceComponent implements OnInit {

  public loading : boolean = false;
  public personId : string | null = null;
  public person : IPerson = {} as IPerson;
  public workingExperience : IWorkingExperiences = {} as IWorkingExperiences;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private personService: PersonService,
              private experienceService: ExperienceService,
              private router : Router
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

  public setWorkingExperience(item : IWorkingExperiences)
  {
    this.workingExperience.id = item.id;
    this.workingExperience.personsId = item.personsId;
    this.workingExperience.name = item.name;
    this.workingExperience.description = item.description;
    this.workingExperience.startDate = item.startDate;
    this.workingExperience.finishDate = item.finishDate;
    this.workingExperience.isPresent = item.isPresent;
  }

  public addWorkingExperience()
  {
      this.experienceService.addWorkingExperience(this.workingExperience).subscribe((data) => {
        this.router.navigate([`/persons`]).then();
      });
  }

  public updateWorkingExperience()
  {
      this.experienceService.updateWorkingExperience(this.workingExperience.id, this.workingExperience).subscribe((data) => {
        this.router.navigate([`/persons`]).then();
      });
  }

  public isNotEmpty() 
  {
    return Object.keys(this.person).length > 0;
  }

}
