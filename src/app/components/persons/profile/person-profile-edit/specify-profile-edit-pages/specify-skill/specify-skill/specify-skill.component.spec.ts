import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifySkillComponent } from './specify-skill.component';

describe('SpecifySkillComponent', () => {
  let component: SpecifySkillComponent;
  let fixture: ComponentFixture<SpecifySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifySkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
