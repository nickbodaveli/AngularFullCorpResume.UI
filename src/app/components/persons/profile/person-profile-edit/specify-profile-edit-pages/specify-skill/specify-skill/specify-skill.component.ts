import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEducations, IPerson, ISkills, IWorkingExperiences } from 'src/app/models/IPerson';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { PersonService } from 'src/app/services/person.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-specify-skill',
  templateUrl: './specify-skill.component.html',
  styleUrls: ['./specify-skill.component.css']
})
export class SpecifySkillComponent implements OnInit {

  public loading : boolean = false;
  public personId : string | null = null;
  public person : IPerson = {} as IPerson;
  public skills : ISkills = {} as ISkills;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private personService: PersonService,
              private skillService : SkillService,
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

  public setSkills(item : ISkills)
  {
    this.skills.id = item.id;
    this.skills.personsId = item.personsId;
    this.skills.name = item.name;
  }

  public addSkill()
  {
      this.skillService.addSkill(this.skills).subscribe((data) => {
        this.router.navigate([`/persons`]).then();
      });
  }

  public updateSkill()
  {
      this.skillService.updateSkill(this.skills.id, this.skills).subscribe((data) => {
        this.router.navigate([`/persons`]).then();
      });
  }

  public isNotEmpty() 
  {
    return Object.keys(this.person).length > 0;
  }

}
