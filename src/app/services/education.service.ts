import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEducations } from '../models/IPerson';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private serverUrl: string = `https://localhost:7172/api`;
  public educationId : string | null = null;

  constructor(private httpClient: HttpClient) { }

  public updateEducation(educationId: string, skills :  IEducations) : Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Education/UpdateEducation/${educationId}`;
    return this.httpClient.put(dataUrl, skills).pipe(catchError(this.handleError));
  }

  public addEducation(skills :  IEducations) : Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Education/AddEducation`;
    return this.httpClient.post(dataUrl, skills).pipe(catchError(this.handleError));
  }

  public getEducation(educationId: string) : Observable<IEducations> {
    if(educationId)
    {
      this.educationId = educationId;
      console.log("mushaobs bliad" + this.educationId);
    }
    else 
    {
      console.log("not working")
    }
    let dataUrl: string = `${this.serverUrl}/Education/GetEducation/${educationId}`;
    return this.httpClient.get<IEducations>(dataUrl).pipe(catchError(this.handleError));
  }

  public setModaleducation(educationId : string)
  {
    console.log(educationId + "it working too");
    this.getEducation(educationId);
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
