import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEducations, IPerson } from 'src/app/models/IPerson';
import { EducationService } from 'src/app/services/education.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-specify-education',
  templateUrl: './specify-education.component.html',
  styleUrls: ['./specify-education.component.css']
})
export class SpecifyEducationComponent implements OnInit {

  public loading : boolean = false;
  public personId : string | null = null;
  public person : IPerson = {} as IPerson;
  public education : IEducations = {} as IEducations;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private personService: PersonService,
              private educationService : EducationService,
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

  public setEducation(item : IEducations)
  {
    this.education.id = item.id;
    this.education.personsId = item.personsId;
    this.education.name = item.name;
  }

  public addEducation()
  {
      this.educationService.addEducation(this.education).subscribe((data) => {
        this.router.navigate([`/persons`]).then();
      });
  }

  public updateEducation()
  {
      this.educationService.updateEducation(this.education.id, this.education).subscribe((data) => {
        this.router.navigate([`/persons`]).then();
      });
  }

  public isNotEmpty() 
  {
    return Object.keys(this.person).length > 0;
  }

}
