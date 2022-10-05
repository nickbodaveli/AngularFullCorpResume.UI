import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ISkills } from '../models/IPerson';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private serverUrl: string = `https://localhost:7172/api`;
  public skillId : string | null = null;

  constructor(private httpClient: HttpClient) { }

  public updateSkill(skillId: string, education :  ISkills[]) : Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Skill/UpdateSkill/${skillId}`;
    return this.httpClient.put(dataUrl, education).pipe(catchError(this.handleError));
  }

  public getSkill(skillId: string) : Observable<ISkills> {
    if(skillId)
    {
      this.skillId = skillId;
      console.log("mushaobs bliad" + this.skillId);
    }
    else 
    {
      console.log("not working")
    }
    let dataUrl: string = `${this.serverUrl}/Skill/GetSkill/${skillId}`;
    return this.httpClient.get<ISkills>(dataUrl).pipe(catchError(this.handleError));
  }

  public setModalSkillId(skillId : string)
  {
    console.log(skillId + "it working too");
    this.getSkill(skillId);
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
