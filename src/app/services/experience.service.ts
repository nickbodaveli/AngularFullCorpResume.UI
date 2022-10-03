import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IWorkingExperiences } from '../models/IPerson';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private serverUrl: string = `https://localhost:7172/api`;

  constructor(private httpClient: HttpClient) { }

  public updateExperience(experienceId: string, workingExperience :  IWorkingExperiences[]) : Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Experience/UpdateExperience/${experienceId}`;
    return this.httpClient.put(dataUrl, workingExperience).pipe(catchError(this.handleError));
  }
  
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if(error.error instanceof ErrorEvent) {
      //client Error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      // Server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
