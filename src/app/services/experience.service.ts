import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IWorkingExperiences } from '../models/IPerson';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private serverUrl: string = `https://localhost:7172/api`;
  public workingExperienceId : string | null = null;

  constructor(private httpClient: HttpClient) { }

  public updateWorkingExperience(workingExperienceId: string, workingExperience :  IWorkingExperiences) : Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Experience/UpdateExperience/${workingExperienceId}`;
    return this.httpClient.put(dataUrl, workingExperience).pipe(catchError(this.handleError));
  }

  public addWorkingExperience(workingExperience :  IWorkingExperiences) : Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Experience/AddExperience`;
    return this.httpClient.post(dataUrl, workingExperience).pipe(catchError(this.handleError));
  }

  public getWorkingExperience(workingExperienceId: string) : Observable<IWorkingExperiences> {
    if(workingExperienceId)
    {
      this.workingExperienceId = workingExperienceId;
      console.log("mushaobs bliad" + this.workingExperienceId);
    }
    else 
    {
      console.log("not working")
    }
    let dataUrl: string = `${this.serverUrl}/Experience/GetExperience/${workingExperienceId}`;
    return this.httpClient.get<IWorkingExperiences>(dataUrl).pipe(catchError(this.handleError));
  }

  public setModalworkingExperienceId(workingExperienceId : string)
  {
    console.log(workingExperienceId + "it working too");
    this.getWorkingExperience(workingExperienceId);
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
