import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiHost + '/Auth';
  helper: JwtHelperService;

  constructor(private http: HttpClient, private router: Router) {
    this.helper = new JwtHelperService();
  }

  signUp(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl+'/sign-up', user);
  }

  signIn(user: User): Observable<User>{
    // console.log(`${this.apiUrl}+/sign-in`);
    return this.http.post<User>(this.apiUrl+'/sign-in', user);
  }

  sendRecoveryLink(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl+'/send-recovery-link', user);
  }

  logout(){
    //Remove the stored from local storage
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth/sign-in');
  }

  updatePassword(user: User, token: string){
    console.log(user + " " + token);
    let httpHeaders = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put<User>(this.apiUrl+'/reset-password', user, { headers: httpHeaders });
  }
}
