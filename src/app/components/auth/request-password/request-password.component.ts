import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/auth/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css']
})
export class RequestPasswordComponent implements OnInit {
  errorMessage!: string;
  loading: boolean = false;
  authForm!: FormGroup;
  successMessage!: string;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  requestPassword(user: User){
    if (!this.authForm.valid) return;
    this.loading = true;
    user.appOriginUrl = window.location.origin;
    console.log(user);
    return this.authService.sendRecoveryLink(user).subscribe(
      (data) => {
        this.loading = false;
        this.successMessage = "The activation has been sent. Please check your emails!";
      }, error => {
        this.loading = false;
        if (error.status === 404){
          this.errorMessage = "Your email doesn't exist in our database!";
        }else{
          this.errorMessage = "Something went wrong. Please try again!";
        }
      }
    );
  }

}
