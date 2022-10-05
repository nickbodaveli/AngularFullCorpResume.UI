import { Component, OnInit } from '@angular/core';
import { ISkills } from 'src/app/models/IPerson';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-specify-skill-modal',
  templateUrl: './specify-skill-modal.component.html',
  styleUrls: ['./specify-skill-modal.component.css']
})
export class SpecifySkillModalComponent implements OnInit {

  public loading : boolean = false;
  public errorMessage : string | null = null;
  public skills : ISkills = {} as ISkills;

  constructor(private skillService : SkillService) { }
  

  ngOnInit(): void {
  
    if(this.skillService.skillId)
    {
      let getSkillId = this.skillService.skillId;
      console.log(getSkillId + "workinggggggggggggggggggg!");
      this.loading = true;
      this.skillService.getSkill(getSkillId).subscribe((data) => {
      this.skills = data;
      console.log(this.skills);
      this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      });
    } 
    else
    {
      console.log("not workingggggggggggggggggggggggggggggggggggggg");
    }
  }

}
