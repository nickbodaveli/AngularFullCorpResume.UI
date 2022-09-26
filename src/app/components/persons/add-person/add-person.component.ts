import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPerson } from 'src/app/models/IPerson';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  public loading : boolean = false;
  public person : IPerson = {} as IPerson;
  public errorMessage : string | null = null;

  
  constructor(private personService : PersonService,
    private router: Router) 
    { }


  ngOnInit(): void {
    
  }

  
  public createSubmit() 
  {
    this.personService.createPerson(this.person).subscribe((data) => {
    this.router.navigate(['/']).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate(['/persons/add']).then();
    });
  }


}
