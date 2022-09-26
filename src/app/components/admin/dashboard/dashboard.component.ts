import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {


    let a = localStorage.getItem('user');

    if(a)
    {
      let test = JSON.parse(a);
      console.log(test.fullname);
    }
  }

  

  logout(){
    return this.authService.logout();
  }

}
