import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/auth/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errorMessage!: string;
  authForm!: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: false
    });
  }

  ngOnInit(): void {
  }

  signIn(user: User){
    if (!this.authForm.valid) return;

    if (user.rememberMe === false){
      //Disable loader
      this.loading = false;
      this.errorMessage = "You must agree remember me!";
      return;
    }
    //Enable loader
    this.loading = true;
    return this.authService.signIn(user).subscribe(
      user => {
        this.loading = false;
         //Add user data to local storage
         localStorage.setItem('user', JSON.stringify(user));
         // Redirect user to protected route
         this.router.navigateByUrl('/persons');
      },error => {
        // If error
        console.log(error);
        //Show error message to user
        this.errorMessage = "Login failed. Please try again!";
        //Disable loader
        this.loading = false;
      }
    );
  }
}
