import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPerson, IWorkingExperiences } from '../models/IPerson';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private serverUrl: string = `https://localhost:7172/api`;

  constructor(private httpClient: HttpClient) { }

  public getAllPersons() : Observable<IPerson[]> {
    let dataUrl: string = `${this.serverUrl}/Person/GetAllPersons`;
    return this.httpClient.get<IPerson[]>(dataUrl).pipe(catchError(this.handleError));
  }

  public getPerson(personId: string) : Observable<IPerson> {
    let dataUrl: string = `${this.serverUrl}/Person/GetPerson/${personId}`;
    return this.httpClient.get<IPerson>(dataUrl).pipe(catchError(this.handleError));
  }

  public createPerson(person: IPerson) : Observable<IPerson> {
    let dataUrl: string = `${this.serverUrl}/Person/AddPerson`;
    return this.httpClient.post<IPerson>(dataUrl, person).pipe(catchError(this.handleError));
  }

  public updatePerson(person: IPerson, personId: string) : Observable<IPerson> {
    let dataUrl: string = `${this.serverUrl}/Person/UpdatePerson/${personId}`;
    return this.httpClient.put<IPerson>(dataUrl, person).pipe(catchError(this.handleError));
  }

  public deletePerson(personId: string) : Observable<IPerson> {
    let dataUrl: string = `${this.serverUrl}/Person/DeletePerson/${personId}`;
    return this.httpClient.delete<IPerson>(dataUrl).pipe(catchError(this.handleError));
  }


  public getPersonByUserId(userId: string) : Observable<IPerson> {
    let dataUrl: string = `${this.serverUrl}/Person/GetPersonByUserId/${userId}`;
    return this.httpClient.get<IPerson>(dataUrl).pipe(catchError(this.handleError));
  }

  public updateWorkingExperience(personId: string, workingExperience :  IWorkingExperiences[]) : Observable<any> {
    console.log(workingExperience);
    let dataUrl: string = `${this.serverUrl}/Person/UpdateWorkingExperiences`;
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
