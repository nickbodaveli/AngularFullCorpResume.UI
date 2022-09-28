import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  fullName : string = '';

  constructor(private authService: AuthService) { }

  isLoggedIn()
  {
    var loggedUser = localStorage.getItem('user');
    if(loggedUser)
    {
      let inJson= JSON.parse(loggedUser);
      this.fullName = inJson.fullname;
      return true;
    }
    return false;
  }

  logout(){
    return this.authService.logout();
  }

  ngOnInit(): void {
  }

}
