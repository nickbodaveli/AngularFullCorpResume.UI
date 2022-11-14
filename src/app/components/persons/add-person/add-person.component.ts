import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPerson } from 'src/app/models/IPerson';
import { PersonService } from 'src/app/services/person.service';
import { User } from 'src/app/models/auth/user';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  public loading : boolean = false;
  public person : IPerson = {} as IPerson;
  public errorMessage : string | null = null;
  // public rawFile: string | Blob | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private personService : PersonService,
              private router: Router) 
              { }

  ngOnInit(): void {
    
  }

  file: any;

  handleFileInput(e: any) {
    this.file = e?.target?.files[0];
  }
  
  public createSubmit() 
  {
      var loggedUser = localStorage.getItem('user');
      if(loggedUser)
      {
        let inJson= JSON.parse(loggedUser);

        this.person.usersId = inJson.id;
        console.log(this.file);

        const formData: FormData = new FormData();
        formData.append('file', this.file);
        formData.append('usersId', this.person.usersId);
        formData.append('name', this.person.name);
        formData.append('about', this.person.about);
        formData.append('lastName', this.person.lastName);
        formData.append('email', this.person.email);
        formData.append('skype', this.person.skype);
        formData.append('phone', this.person.phone);
        formData.append('website', this.person.website);
        
        this.personService.createPerson(formData).subscribe((data) => {
          this.router.navigate(['/']).then();
          }, (error) => {
            this.errorMessage = error;
            this.router.navigate(['/persons/add']).then();
          });
      }
  }

  // uploadFile(): void {
  //   console.log(this.rawFile);

  //   let formData = new FormData();
  //   formData.set('file name', this.rawFile!);
  //   console.log(formData);
  //   this.person.file = formData;
  // }

}
