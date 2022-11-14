import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  id : string = '';
  fullName : string = '';

  constructor(private authService: AuthService, private personService : PersonService, private router: Router) { }

  isLoggedIn()
  {
    var loggedUser = localStorage.getItem('user');
    if(loggedUser)
    {
      let inJson= JSON.parse(loggedUser);
      this.fullName = inJson.fullname;
      this.id = inJson.id;
      // this.personService.getPersonByUserId(inJson.id).subscribe((person) => {
      //   this.id = person.id;
      // });
      return true;
    }
    return false;
  }

  profile()
  {
    this.personService.getPersonByUserId(this.id).subscribe((personId) => {
      if(personId != -1)
      {
        this.router.navigate([`/persons/profile/view/${personId}`]).then();
      }
      else 
      {
        this.router.navigate([`/persons/add`]).then();
      }
    });
  }

  logout(){
    return this.authService.logout();
  }

  ngOnInit(): void {
  }

}
